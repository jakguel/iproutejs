"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkErspanIp6ErspanArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkErspanIp6ErspanArgsSchema = {
    type: 'object',
    required: ['remote', 'local', 'seq', 'key', 'erspan_ver'],
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
        seq: {
            type: 'boolean',
            enum: [true]
        },
        key: {
            type: 'integer',
            minimum: 0,
            maximum: 4294967295
        },
        erspan_ver: {
            type: 'integer',
            minimum: 0,
            maximum: 2
        },
        erspan: {
            type: 'integer',
            minimum: 0,
            maximum: 1048576,
            nullable: true
        },
        erspan_dir: {
            type: 'string',
            enum: Object.values(link_constants_1.ErspanDirections),
            nullable: true
        },
        erspan_hwid: {
            type: 'integer',
            minimum: 0,
            maximum: 63,
            nullable: true
        },
        'allow-localremote': {
            type: 'boolean',
            nullable: true
        },
        'noallow-localremote': {
            type: 'boolean',
            nullable: true
        },
        external: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=erspan-ip6erspan.schema.js.map