"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourDelSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.NeighbourDelSchema = {
    $id: schemas_1.SchemaIds.NeighbourDel,
    type: 'object',
    required: ['to'],
    properties: {
        to: {
            type: 'string',
            minLength: 1,
            format: 'ip'
        },
        proxy: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        router: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        extern_learn: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=del.schema.js.map