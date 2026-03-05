"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tunnel6rdSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.Tunnel6rdSchema = {
    $id: schemas_1.SchemaIds.Tunnel6rd,
    type: 'object',
    required: ['dev'],
    properties: {
        dev: {
            type: 'string',
            minLength: 1
        },
        '6rd-prefix': {
            type: 'string',
            format: 'ip-or-any',
            minLength: 1,
            nullable: true
        },
        '6rd-relay_prefix': {
            type: 'string',
            format: 'ip-or-any',
            minLength: 1,
            nullable: true
        },
        '6rd-reset': {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=6rd.schema.js.map