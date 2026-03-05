"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommandOutput = void 0;
/**
 * Robust parser for `ip -json` command output.
 *
 * Some iproute2 versions do not produce a valid JSON array but instead output
 * objects separated by newlines (NDJSON), a JSON array where elements are
 * separated by newlines without commas, or JSON interleaved with plain-text
 * statistics (e.g. RX/TX tables from `-statistics`).
 *
 * This function tries four strategies in order:
 *
 *   1. Standard JSON        – `[{...},{...}]`
 *   2. Strip non-JSON lines – remove plain-text (RX/TX stats), retry JSON
 *   3. NDJSON               – `{...}\n{...}`  or  `[...]\n[...]`
 *   4. Array w/o commas     – `[{...}\n{...}]`
 *
 * Throws `SyntaxError` only if all four strategies fail.
 */
function parseCommandOutput(stdout) {
    const trimmed = stdout.trim();
    if (!trimmed) {
        return [];
    }
    // 1. Standard JSON (the happy path)
    try {
        return JSON.parse(trimmed);
    }
    catch ( /* fall through */_a) { /* fall through */ }
    // 2. Strip non-JSON lines (e.g. RX/TX plain-text statistics from `ip -statistics`)
    //    and retry.  JSON-relevant lines start with [ ] { } , or "
    const stripped = trimmed
        .split('\n')
        .filter(line => {
        const l = line.trim();
        return !l || /^[\[{\]},"]/.test(l);
    })
        .join('\n')
        .trim();
    if (stripped && stripped !== trimmed) {
        try {
            return JSON.parse(stripped);
        }
        catch ( /* fall through */_b) { /* fall through */ }
    }
    // 3. NDJSON — one JSON value per line (use stripped version if available)
    const source = stripped || trimmed;
    const fromLines = [];
    for (const line of source.split('\n')) {
        const l = line.trim();
        if (!l)
            continue;
        try {
            const parsed = JSON.parse(l);
            Array.isArray(parsed) ? fromLines.push(...parsed) : fromLines.push(parsed);
        }
        catch ( /* skip unparseable lines */_c) { /* skip unparseable lines */ }
    }
    if (fromLines.length > 0) {
        return fromLines;
    }
    // 4. JSON array with missing commas between objects
    try {
        const fixed = source.replace(/\}\s*\n\s*\{/g, '},{');
        return JSON.parse(fixed);
    }
    catch ( /* fall through */_d) { /* fall through */ }
    throw new SyntaxError(`parseCommandOutput: failed to parse ip command output: ${trimmed.slice(0, 300)}`);
}
exports.parseCommandOutput = parseCommandOutput;
//# sourceMappingURL=parse-output.js.map