"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSeg6EncapArgsSchema = void 0;
exports.RouteSeg6EncapArgsSchema = {
    type: 'object',
    required: ['mode', 'segs'],
    properties: {
        mode: {
            type: 'boolean',
            enum: [true]
        },
        encap: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        inline: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        l2encap: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        segs: {
            type: 'string',
            format: 'comma-separated-ipv6-addresses'
        },
        hmac: {
            type: 'integer',
            minimum: 0,
            nullable: true
        }
    }
};
//# sourceMappingURL=seg6.schema.js.map