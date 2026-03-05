"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkShowSchema = void 0;
const link_constants_1 = require("../link.constants");
const schemas_1 = require("../../common/constants/schemas");
exports.LinkShowSchema = {
    $id: schemas_1.SchemaIds.LinkShow,
    type: 'object',
    required: [],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        group: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        up: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        master: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        type: {
            type: 'string',
            enum: Object.values(link_constants_1.ExtendedLinkTypes),
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