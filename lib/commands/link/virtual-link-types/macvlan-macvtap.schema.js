"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLinkMacvlanMacvtapArgsSchema = exports.AddLinkMacvlanMacvtapArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkMacvlanMacvtapArgsSchema = {
    type: 'object',
    required: ['mode'],
    additionalProperties: false,
    properties: {
        mode: {
            type: 'string',
            enum: Object.values(link_constants_1.MacvlanMacvtapModes)
        },
        bcqueuelen: {
            type: 'integer',
            nullable: true,
            minimum: 1,
            maximum: 4294967295
        }
    }
};
exports.SetLinkMacvlanMacvtapArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        macaddr: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        add: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        set: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        del: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        flush: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        bcqueuelen: {
            type: 'integer',
            nullable: true,
            minimum: 1,
            maximum: 4294967295
        }
    }
};
//# sourceMappingURL=macvlan-macvtap.schema.js.map