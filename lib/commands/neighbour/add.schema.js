"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const neighbour_constants_1 = require("../neighbour.constants");
exports.NeighbourAddSchema = {
    $id: schemas_1.SchemaIds.NeighbourAdd,
    type: 'object',
    required: ['to'],
    properties: {
        to: {
            type: 'string',
            minLength: 1,
            format: 'ip'
        },
        lladdr: {
            type: 'string',
            minLength: 1,
            format: 'mac',
            nullable: true
        },
        nud: {
            type: 'string',
            enum: Object.values(neighbour_constants_1.NudStates),
            nullable: true
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
//# sourceMappingURL=add.schema.js.map