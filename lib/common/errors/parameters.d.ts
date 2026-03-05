import { ErrorObject } from 'ajv';
/**
 * Error class to be used when the provided options are invalid.
 * @category Errors
 */
export declare class ParametersError extends Error {
    /** Code to identify the error in `catch` clauses. */
    code: string;
    /**
     * Detailed introspection on the encountered errors, useful to know exactly
     * what failed in the options.
     */
    errors?: ErrorObject[] | null;
    static message: string;
    constructor(message: string, errors?: ErrorObject[] | null);
}
