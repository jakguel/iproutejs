"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddrlabelDelSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.AddrlabelDelSchema = {
    $id: schemas_1.SchemaIds.AddrlabelDel,
    type: 'object',
    required: ['prefix'],
    properties: {
        prefix: {
            type: 'string',
            minLength: 1,
            format: 'ip-with-required-mask'
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        label: {
            type: 'integer',
            minimum: 0,
            nullable: true
        }
    }
};
//# sourceMappingURL=del.schema.js.map