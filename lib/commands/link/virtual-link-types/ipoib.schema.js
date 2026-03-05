"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkIpoibArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkIpoibArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        pkey: {
            type: 'string',
            format: '4-hex',
            nullable: true
        },
        mode: {
            type: 'string',
            enum: Object.values(link_constants_1.IpoIbModes),
            nullable: true
        }
    }
};
//# sourceMappingURL=ipoib.schema.js.map