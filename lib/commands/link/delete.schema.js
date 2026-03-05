"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDeleteSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const add_schema_1 = require("./add.schema");
exports.LinkDeleteSchema = {
    $id: schemas_1.SchemaIds.LinkDelete,
    type: 'object',
    required: [],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            keyless: true,
            nullable: true
        },
        group: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        type: {
            type: 'object',
            nullable: true,
            properties: add_schema_1.typePropertiesSchema
        }
    }
};
//# sourceMappingURL=delete.schema.js.map