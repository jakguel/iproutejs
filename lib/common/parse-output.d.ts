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
export declare function parseCommandOutput<T>(stdout: string): T;
