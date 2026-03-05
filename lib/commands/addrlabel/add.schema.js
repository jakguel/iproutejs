"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddrlabelAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.AddrlabelAddSchema = {
    $id: schemas_1.SchemaIds.AddrlabelAdd,
    type: 'object',
    required: ['prefix', 'label'],
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
        }
    }
};
//# sourceMappingURL=add.schema.js.map