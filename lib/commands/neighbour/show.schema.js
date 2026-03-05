"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourShowSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const neighbour_constants_1 = require("../neighbour.constants");
exports.NeighbourShowSchema = {
    $id: schemas_1.SchemaIds.NeighbourShow,
    type: 'object',
    required: [],
    properties: {
        proxy: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        to: {
            type: 'string',
            minLength: 1,
            format: 'ip',
            nullable: true
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        nud: {
            type: 'string',
            enum: Object.values(neighbour_constants_1.NudStates),
            nullable: true
        },
        vrf: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=show.schema.js.map