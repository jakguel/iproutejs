/**
 * Promisified `exec` wrapper that converts non-zero exit codes to {@link CommandError}.
 *
 * Node's `promisify(exec)` throws a raw `Error` (with `.stderr` / `.stdout` attached)
 * when the child process exits with a non-zero exit code.  This wrapper catches that
 * error and re-throws it as a typed `CommandError` so callers always deal with one
 * consistent error class — including the derived `code` from {@link CommandErrorCodes}.
 *
 * @internal
 */
export declare function execCommand(cmd: string): Promise<{
    stdout: string;
    stderr: string;
}>;
