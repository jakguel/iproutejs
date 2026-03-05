"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingTableOptionsSchema = void 0;
const schemas_1 = require("../common/constants/schemas");
exports.RoutingTableOptionsSchema = {
    $id: schemas_1.SchemaIds.RoutingTablesOptions,
    type: 'object',
    required: [],
    properties: {
        id: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        name: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=routing-tables.schemas.js.map