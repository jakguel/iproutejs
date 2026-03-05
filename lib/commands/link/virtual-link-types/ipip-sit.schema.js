"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkIpipSipArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkIpipSipArgsSchema = {
    type: 'object',
    required: ['remote', 'local'],
    additionalProperties: false,
    properties: {
        remote: {
            type: 'string',
            format: 'ip'
        },
        local: {
            type: 'string',
            format: 'ip'
        },
        encap: {
            type: 'string',
            enum: Object.values(link_constants_1.SecondaryUdpEncapsulations),
            nullable: true
        },
        'encap-sport': {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: ['auto'],
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    maximum: 65535,
                    nullable: true
                }
            ]
        },
        'encap-dport': {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 65535
        },
        'encap-csum': {
            type: 'boolean',
            nullable: true
        },
        'noencap-csum': {
            type: 'boolean',
            nullable: true
        },
        'encap-remcsum': {
            type: 'boolean',
            nullable: true
        },
        'noencap-remcsum': {
            type: 'boolean',
            nullable: true
        },
        mode: {
            type: 'string',
            enum: Object.values(link_constants_1.IpipSipDeviceModes),
            nullable: true
        },
        external: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=ipip-sit.schema.js.map