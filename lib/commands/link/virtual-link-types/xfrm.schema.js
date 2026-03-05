"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkXfrmArgsSchema = void 0;
exports.AddLinkXfrmArgsSchema = {
    type: 'object',
    required: ['dev'],
    additionalProperties: false,
    properties: {
        dev: {
            type: 'string',
            minLength: 1
        },
        if_id: {
            type: 'integer',
            minimum: 1,
            maximum: 4294967295,
            nullable: true
        }
    }
};
//# sourceMappingURL=xfrm.schema.js.map