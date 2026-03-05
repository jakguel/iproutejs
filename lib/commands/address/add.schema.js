"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const address_constants_1 = require("../address.constants");
exports.AddressAddSchema = {
    $id: schemas_1.SchemaIds.AddressAdd,
    type: 'object',
    required: ['local', 'dev'],
    properties: {
        local: {
            type: 'string',
            format: 'ip-with-optional-mask'
        },
        peer: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        broadcast: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        anycast: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        label: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        scope: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(address_constants_1.AddressScopes),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        dev: {
            type: 'string',
            minLength: 1,
            maxLength: 15
        },
        valid_lft: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: ['forever'],
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        preferred_lft: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: ['forever'],
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        home: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        mngtmpaddr: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        nodad: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        optimistic: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        noprefixroute: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        autojoin: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=add.schema.js.map