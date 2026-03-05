/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
export declare class CommandError extends Error {
    /** Code to identify the error in `catch` clauses. */
    code: string;
    /** Command line that triggered the command error. */
    cmd: string;
    constructor(message: string, cmd: string);
}
