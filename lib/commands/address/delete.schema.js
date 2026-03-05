"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDeleteSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const address_constants_1 = require("../address.constants");
exports.AddressDeleteSchema = {
    $id: schemas_1.SchemaIds.AddressDelete,
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
        mngtmpaddr: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=delete.schema.js.map