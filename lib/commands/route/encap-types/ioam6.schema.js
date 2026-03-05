"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteIoam6EncapArgsSchema = void 0;
exports.RouteIoam6EncapArgsSchema = {
    type: 'object',
    required: ['trace', 'prealloc', 'type', 'ns', 'size'],
    properties: {
        trace: {
            type: 'boolean',
            enum: [true]
        },
        prealloc: {
            type: 'boolean',
            enum: [true]
        },
        type: {
            type: 'integer',
            minimum: 0
        },
        ns: {
            type: 'integer',
            minimum: 1
        },
        size: {
            type: 'integer',
            minimum: 1
        }
    }
};
//# sourceMappingURL=ioam6.schema.js.map