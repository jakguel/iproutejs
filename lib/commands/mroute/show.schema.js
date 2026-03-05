"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MrouteShowSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const show_constants_1 = require("../route/show.constants");
exports.MrouteShowSchema = {
    $id: schemas_1.SchemaIds.MrouteShow,
    type: 'object',
    required: [],
    properties: {
        to: {
            type: 'string',
            format: 'ip-with-required-mask',
            nullable: true
        },
        from: {
            type: 'string',
            format: 'ip-with-required-mask',
            nullable: true
        },
        iif: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        table: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RouteRoutingTables),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        }
    }
};
//# sourceMappingURL=show.schema.js.map