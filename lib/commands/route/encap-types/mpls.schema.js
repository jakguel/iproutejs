"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteMplsEncapArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.RouteMplsEncapArgsSchema = {
    type: 'object',
    nullable: true,
    required: ['label'],
    properties: {
        label: {
            type: ['boolean', 'string'],
            keyless: true,
            oneOf: [
                {
                    type: 'string',
                    format: 'slash-separated-numbers',
                    minLength: 1,
                    keyless: true
                },
                {
                    type: 'boolean',
                    enum: [true],
                    keyless: true
                }
            ]
        },
        ttl: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(link_constants_1.TtlSpecialValues),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    maximum: 255,
                    nullable: true
                }
            ]
        }
    }
};
//# sourceMappingURL=mpls.schema.js.map