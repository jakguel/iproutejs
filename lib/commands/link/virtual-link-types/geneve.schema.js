"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkGeneveArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkGeneveArgsSchema = {
    type: 'object',
    required: ['id', 'remote'],
    additionalProperties: false,
    properties: {
        id: {
            type: 'integer',
            minimum: 0,
            maximum: 16777215
        },
        remote: {
            type: 'string',
            format: 'ip'
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
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 63
        },
        df: {
            type: 'string',
            enum: Object.values(link_constants_1.DontFragmentFlagValues),
            nullable: true
        },
        flowlabel: {
            type: 'integer',
            minimum: 0,
            maximum: 1048575,
            nullable: true
        },
        dstport: {
            type: 'integer',
            nullable: true,
            minimum: 1,
            maximum: 65535
        },
        external: {
            type: 'boolean',
            nullable: true
        },
        noexternal: {
            type: 'boolean',
            nullable: true
        },
        udpcsum: {
            type: 'boolean',
            nullable: true
        },
        noudpcsum: {
            type: 'boolean',
            nullable: true
        },
        udp6zerocsumtx: {
            type: 'boolean',
            nullable: true
        },
        noudp6zerocsumtx: {
            type: 'boolean',
            nullable: true
        },
        udp6zerocsumrx: {
            type: 'boolean',
            nullable: true
        },
        noudp6zerocsumrx: {
            type: 'boolean',
            nullable: true
        }
    }
};
//# sourceMappingURL=geneve.schema.js.map