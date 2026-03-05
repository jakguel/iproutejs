"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametersError = void 0;
/**
 * Error class to be used when the provided options are invalid.
 * @category Errors
 */
class ParametersError extends Error {
    constructor(message, errors) {
        // 'Error' breaks prototype chain here.
        super(message);
        /** Code to identify the error in `catch` clauses. */
        this.code = 'ERR_INVALID_PARAMETERS';
        // Fixing the break.
        Object.setPrototypeOf(this, ParametersError.prototype);
        this.errors = errors;
    }
}
exports.ParametersError = ParametersError;
ParametersError.message = 'Invalid parameters. Catch `e.errors` for details.';
//# sourceMappingURL=parameters.js.map