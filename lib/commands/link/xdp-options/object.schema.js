"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSetXdpObjectOptionsSchema = void 0;
exports.LinkSetXdpObjectOptionsSchema = {
    type: 'object',
    required: ['file'],
    properties: {
        file: {
            type: 'string',
            minLength: 1,
            keyless: true
        },
        section: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        verbose: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=object.schema.js.map