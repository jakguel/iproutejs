"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourGetSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.NeighbourGetSchema = {
    $id: schemas_1.SchemaIds.RouteGet,
    type: 'object',
    required: ['to', 'dev'],
    properties: {
        proxy: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        to: {
            type: 'string',
            minLength: 1,
            format: 'ip'
        },
        dev: {
            type: 'string',
            minLength: 1
        }
    }
};
//# sourceMappingURL=get.schema.js.map