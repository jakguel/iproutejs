"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFlushSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const address_constants_1 = require("../address.constants");
exports.AddressFlushSchema = {
    $id: schemas_1.SchemaIds.AddressFlush,
    type: 'object',
    required: [],
    properties: {
        dev: {
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
        metric: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        to: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        permanent: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-permanent': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        dynamic: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-dynamic': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        secondary: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-secondary': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        primary: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-primary': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        tentative: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-tentative': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        deprecated: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-deprecated': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        dadfailed: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-dadfailed': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        temporary: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-temporary': {
            type: 'boolean',
            enum: [true],
            nullable: true
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
        },
        label: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        up: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=flush.schema.js.map