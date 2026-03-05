"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkHsrArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkHsrArgsSchema = {
    type: 'object',
    required: ['slave1', 'slave2'],
    additionalProperties: false,
    properties: {
        slave1: {
            type: 'string',
            minLength: 1
        },
        slave2: {
            type: 'string',
            minLength: 1
        },
        supervision: {
            type: 'integer',
            minimum: 0,
            maximum: 255,
            nullable: true
        },
        version: {
            type: 'integer',
            enum: Object.values(link_constants_1.HsrVersions),
            nullable: true
        },
        proto: {
            type: 'integer',
            enum: Object.values(link_constants_1.HsrProtocols),
            nullable: true
        }
    }
};
//# sourceMappingURL=hsr.schema.js.map