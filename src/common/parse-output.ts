/**
 * Robust parser for `ip -json` command output.
 *
 * Some iproute2 versions do not produce a valid JSON array but instead output
 * objects separated by newlines (NDJSON), or a JSON array where elements are
 * separated by newlines without commas.  This function tries three strategies:
 *
 *   1. Standard JSON   – `[{...},{...}]`
 *   2. NDJSON          – `{...}\n{...}`  or  `[...]\n[...]`
 *   3. Array w/o commas – `[{...}\n{...}]`
 *
 * Throws `SyntaxError` only if all three strategies fail.
 */
export function parseCommandOutput<T>(stdout: string): T {
  const trimmed = stdout.trim();

  if (!trimmed) {
    return [] as unknown as T;
  }

  // 1. Standard JSON (the happy path)
  try {
    return JSON.parse(trimmed);
  } catch { /* fall through */ }

  // 2. NDJSON — one JSON value per line
  const fromLines: unknown[] = [];
  for (const line of trimmed.split('\n')) {
    const l = line.trim();
    if (!l) continue;
    try {
      const parsed = JSON.parse(l);
      Array.isArray(parsed) ? fromLines.push(...parsed) : fromLines.push(parsed);
    } catch { /* skip unparseable lines */ }
  }
  if (fromLines.length > 0) {
    return fromLines as unknown as T;
  }

  // 3. JSON array with missing commas between objects
  try {
    const fixed = trimmed.replace(/\}\s*\n\s*\{/g, '},{');
    return JSON.parse(fixed);
  } catch { /* fall through */ }

  throw new SyntaxError(
    `parseCommandOutput: failed to parse ip command output: ${trimmed.slice(0, 300)}`,
  );
}
