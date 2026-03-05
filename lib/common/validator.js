"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const regexes_1 = require("./constants/regexes");
const ajv = new ajv_1.default({
    strict: true,
    useDefaults: true,
    coerceTypes: false,
    allowUnionTypes: true
});
ajv.addKeyword({
    keyword: 'keyless',
    schemaType: 'boolean',
    valid: true,
    code(cxt) {
        // Noop.
    }
});
(0, ajv_formats_1.default)(ajv, [
    'ipv4',
    'ipv6'
]);
ajv.addFormat('mac', regexes_1.mac);
ajv.addFormat('4-hex', regexes_1.hex4Digits);
ajv.addFormat('filepath', /^(\/)?([^/\0]+(\/)?)+(\.\w+)?$/);
ajv.addFormat('slash-separated-strings', regexes_1.slashSeparatedStrings);
ajv.addFormat('slash-separated-numbers', regexes_1.slashSeparatedNumbers);
ajv.addFormat('comma-separated-ipv6-addresses', regexes_1.commaSeparatedIpv6Addresses);
ajv.addFormat('time-with-unit', regexes_1.timeWithUnit);
ajv.addFormat('colon-separated-numbers', regexes_1.colonSeparatedNumbers);
ajv.addFormat('tos', regexes_1.tos);
// Since `ajv` doesn't support several formats for same property.
ajv.addFormat('ip', new RegExp(regexes_1.ip, 'i'));
ajv.addFormat('ip-with-optional-mask', new RegExp(regexes_1.ipWithOptionalMask, 'i'));
ajv.addFormat('ip-with-required-mask', new RegExp(regexes_1.ipWithRequiredMask, 'i'));
ajv.addFormat('ip-or-any', new RegExp(regexes_1.ipOrAny, 'i'));
ajv.addFormat('ip-with-required-mask-and-all-and-default-values', new RegExp(regexes_1.ipWithRequiredMaskAndAllAndDefaultValues, 'i'));
ajv.addFormat('ip-with-optional-mask-and-all-and-default-values', new RegExp(regexes_1.ipWithOptionalMaskAndAllAndDefaultValues, 'i'));
ajv.addFormat('ip-with-optional-family-prefix', new RegExp(regexes_1.ipWithOptionalFamilyPrefix, 'i'));
exports.default = ajv;
//# sourceMappingURL=validator.js.map