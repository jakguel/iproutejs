"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandError = void 0;
/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
class CommandError extends Error {
    constructor(message, cmd) {
        // 'Error' breaks prototype chain here.
        super(message);
        /** Code to identify the error in `catch` clauses. */
        this.code = 'ERR_COMMAND_ERRORED';
        // Fixing the break.
        Object.setPrototypeOf(this, CommandError.prototype);
        this.cmd = cmd;
    }
}
exports.CommandError = CommandError;
//# sourceMappingURL=command.js.map