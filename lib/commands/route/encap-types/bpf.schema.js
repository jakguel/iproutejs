"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteBpfEncapArgsSchema = void 0;
exports.RouteBpfEncapArgsSchema = {
    type: 'object',
    nullable: true,
    required: [],
    properties: {
        in: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        out: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        xmit: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        headroom: {
            type: 'integer',
            minimum: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=bpf.schema.js.map