"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TunnelPrlSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.TunnelPrlSchema = {
    $id: schemas_1.SchemaIds.TunnelPrl,
    type: 'object',
    required: ['dev'],
    properties: {
        dev: {
            type: 'string',
            minLength: 1
        },
        'prl-default': {
            type: 'string',
            format: 'ip-or-any',
            minLength: 1,
            nullable: true
        },
        'prl-nodefault': {
            type: 'string',
            format: 'ip-or-any',
            minLength: 1,
            nullable: true
        },
        'prl-delete': {
            type: 'string',
            format: 'ip-or-any',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=prl.schema.js.map