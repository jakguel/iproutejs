"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandError = exports.CommandErrorCodes = void 0;
/**
 * Known reason codes for {@link CommandError}.
 * @category Errors
 */
exports.CommandErrorCodes = {
    /** Address or route already exists (iproute2: "File exists" or "Address already assigned"). */
    ALREADY_EXISTS: 'ERR_ALREADY_EXISTS',
    /** Network device not found (iproute2: "No such device" or "Cannot find device"). */
    NO_DEVICE: 'ERR_NO_DEVICE',
    /** Object not found (iproute2: "No such process"). */
    NOT_FOUND: 'ERR_NOT_FOUND',
    /** Generic fallback — stderr did not match any known pattern. */
    COMMAND_ERRORED: 'ERR_COMMAND_ERRORED',
};
function deriveCode(message) {
    if (message.includes('File exists') || message.includes('Address already assigned')) {
        return exports.CommandErrorCodes.ALREADY_EXISTS;
    }
    if (message.includes('No such device') || message.includes('Cannot find device')) {
        return exports.CommandErrorCodes.NO_DEVICE;
    }
    if (message.includes('No such process')) {
        return exports.CommandErrorCodes.NOT_FOUND;
    }
    return exports.CommandErrorCodes.COMMAND_ERRORED;
}
/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
class CommandError extends Error {
    constructor(message, cmd) {
        // 'Error' breaks prototype chain here.
        super(message);
        // Fixing the break.
        Object.setPrototypeOf(this, CommandError.prototype);
        this.cmd = cmd;
        this.code = deriveCode(message);
    }
}
exports.CommandError = CommandError;
//# sourceMappingURL=command.js.map