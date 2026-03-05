import { promisify } from 'util';
import { exec }      from 'child_process';

import { CommandError } from './errors/command';

const _exec = promisify(exec);

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
export async function execCommand(cmd: string): Promise<{ stdout: string; stderr: string }> {
  try {
    return await _exec(cmd);
  }
  catch (err: any) {
    // promisify(exec) attaches .stderr and .stdout to the thrown Error when
    // the child process exits with a non-zero exit code.
    const stderr: string = (err.stderr as string) || '';
    if (stderr) {
      throw new CommandError(stderr.replace(/\n/g, ''), cmd);
    }
    // Fallback: command failed without stderr (e.g. binary not found).
    throw new CommandError((err.message as string || String(err)).replace(/\n/g, ''), cmd);
  }
}
