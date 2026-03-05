"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validator_1 = __importDefault(require("./validator"));
const parameters_1 = require("./errors/parameters");
/** @internal */
function validate(schemaId, schema, options) {
    const ajvValidate = validator_1.default.getSchema(schemaId) || validator_1.default.compile(schema);
    const isValid = ajvValidate(options);
    if (!isValid) {
        throw new parameters_1.ParametersError(parameters_1.ParametersError.message, ajvValidate.errors);
    }
}
exports.validate = validate;
//# sourceMappingURL=misc.js.map