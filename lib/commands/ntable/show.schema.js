"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NtableShowSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.NtableShowSchema = {
    $id: schemas_1.SchemaIds.NtableShow,
    type: 'object',
    required: [],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        name: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=show.schema.js.map