/**
 * Known reason codes for {@link CommandError}.
 * @category Errors
 */
export declare const CommandErrorCodes: {
    /** Address or route already exists (iproute2: "File exists" or "Address already assigned"). */
    readonly ALREADY_EXISTS: "ERR_ALREADY_EXISTS";
    /** Network device not found (iproute2: "No such device" or "Cannot find device"). */
    readonly NO_DEVICE: "ERR_NO_DEVICE";
    /** Object not found (iproute2: "No such process"). */
    readonly NOT_FOUND: "ERR_NOT_FOUND";
    /** Generic fallback — stderr did not match any known pattern. */
    readonly COMMAND_ERRORED: "ERR_COMMAND_ERRORED";
};
/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
export declare class CommandError extends Error {
    /** Code to identify the error in `catch` clauses. See {@link CommandErrorCodes}. */
    code: string;
    /** Command line that triggered the command error. */
    cmd: string;
    constructor(message: string, cmd: string);
}
