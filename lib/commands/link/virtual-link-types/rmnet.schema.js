"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkRmnetArgsSchema = void 0;
exports.AddLinkRmnetArgsSchema = {
    type: 'object',
    required: ['mux_id'],
    additionalProperties: false,
    properties: {
        mux_id: {
            type: 'integer',
            minimum: 1,
            maximum: 254
        }
    }
};
//# sourceMappingURL=rmnet.schema.js.map