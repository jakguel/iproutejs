"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TunTapAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const tuntap_constants_1 = require("../tuntap.constants");
exports.TunTapAddSchema = {
    $id: schemas_1.SchemaIds.TunTapAdd,
    type: 'object',
    required: ['mode'],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        mode: {
            type: 'string',
            enum: Object.values(tuntap_constants_1.TunTapTunnelModes)
        },
        user: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    minLength: 1
                },
                {
                    type: 'integer',
                    minimum: 0
                }
            ]
        },
        group: {
            type: ['string', 'integer'],
            nullable: true,
            anyOf: [
                {
                    type: 'string',
                    minLength: 1,
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        one_queue: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        pi: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        vnet_hdr: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        multi_queue: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        name: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=add.schema.js.map