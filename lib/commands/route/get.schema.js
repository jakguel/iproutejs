"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteGetSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.RouteGetSchema = {
    $id: schemas_1.SchemaIds.RouteGet,
    type: 'object',
    required: [],
    properties: {
        fibmatch: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        to: {
            type: 'string',
            format: 'ip-with-optional-mask-and-all-and-default-values',
            nullable: true
        },
        from: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        iif: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        oif: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        mark: {
            type: 'string',
            nullable: true,
            pattern: '^(0x[0-9a-fA-F]+|[0-9]+)(/(0x[0-9a-fA-F]+|[0-9]+))?$'
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        vrf: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        ipproto: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    minLength: 1,
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        sport: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        dport: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        connected: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=get.schema.js.map