"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaddressAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.MaddressAddSchema = {
    $id: schemas_1.SchemaIds.MaddressAdd,
    type: 'object',
    required: ['address', 'dev'],
    properties: {
        address: {
            type: 'string',
            minLength: 1,
            format: 'mac',
            keyless: true
        },
        dev: {
            type: 'string',
            minLength: 1
        }
    }
};
//# sourceMappingURL=add.schema.js.map