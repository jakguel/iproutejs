"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSetXdpPinnedOptionsSchema = void 0;
exports.LinkSetXdpPinnedOptionsSchema = {
    type: 'object',
    required: ['file'],
    properties: {
        file: {
            type: 'string',
            minLength: 1,
            keyless: true
        }
    }
};
//# sourceMappingURL=pinned.schema.js.map