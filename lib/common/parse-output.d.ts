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
export declare function parseCommandOutput<T>(stdout: string): T;
