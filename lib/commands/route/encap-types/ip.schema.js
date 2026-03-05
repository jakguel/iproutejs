"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteIpEncapArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.RouteIpEncapArgsSchema = {
    type: 'object',
    required: ['id', 'dst'],
    nullable: true,
    properties: {
        id: {
            type: 'integer',
            minimum: 1
        },
        dst: {
            type: 'string',
            format: 'ip-with-optional-mask'
        },
        src: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        ttl: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(link_constants_1.TtlSpecialValues),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    maximum: 255,
                    nullable: true
                }
            ]
        }
    }
};
//# sourceMappingURL=ip.schema.js.map