"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkVrfArgsSchema = void 0;
exports.AddLinkVrfArgsSchema = {
    type: 'object',
    required: ['table'],
    additionalProperties: false,
    properties: {
        table: {
            type: 'integer',
            minimum: 1,
            maximum: 4294967295
        }
    }
};
//# sourceMappingURL=vrf.schema.js.map