/**
 * Known reason codes for {@link CommandError}.
 * @category Errors
 */
export const CommandErrorCodes = {
  /** Address or route already exists (iproute2: "File exists" or "Address already assigned"). */
  ALREADY_EXISTS:  'ERR_ALREADY_EXISTS',
  /** Network device not found (iproute2: "No such device" or "Cannot find device"). */
  NO_DEVICE:       'ERR_NO_DEVICE',
  /** Object not found (iproute2: "No such process"). */
  NOT_FOUND:       'ERR_NOT_FOUND',
  /** Generic fallback — stderr did not match any known pattern. */
  COMMAND_ERRORED: 'ERR_COMMAND_ERRORED',
} as const;

function deriveCode(message: string): string {
  if (message.includes('File exists') || message.includes('Address already assigned')) {
    return CommandErrorCodes.ALREADY_EXISTS;
  }
  if (message.includes('No such device') || message.includes('Cannot find device')) {
    return CommandErrorCodes.NO_DEVICE;
  }
  if (message.includes('No such process')) {
    return CommandErrorCodes.NOT_FOUND;
  }
  return CommandErrorCodes.COMMAND_ERRORED;
}

/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
export class CommandError extends Error {
  /** Code to identify the error in `catch` clauses. See {@link CommandErrorCodes}. */
  code: string;

  /** Command line that triggered the command error. */
  cmd: string;

  constructor(message: string, cmd: string) {
    // 'Error' breaks prototype chain here.
    super(message);
    // Fixing the break.
    Object.setPrototypeOf(this, CommandError.prototype);

    this.cmd  = cmd;
    this.code = deriveCode(message);
  }
}
