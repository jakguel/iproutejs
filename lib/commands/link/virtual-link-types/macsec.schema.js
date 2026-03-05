"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkMacsecArgsSchema = void 0;
const attribute_values_1 = require("../../../common/constants/attribute-values");
const link_constants_1 = require("../../link.constants");
exports.AddLinkMacsecArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        address: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        port: {
            type: 'integer',
            minimum: 1,
            maximum: 65535,
            nullable: true
        },
        sci: {
            type: 'string',
            pattern: '^[0-9a-fA-F]{16}$',
            nullable: true
        },
        cipher: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        icvlen: {
            type: 'integer',
            minimum: 1,
            maximum: 16,
            nullable: true
        },
        encrypt: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        send_sci: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        end_station: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        scb: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        protect: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        replay: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        window: {
            type: 'integer',
            minimum: 0,
            // 2^32-1
            maximum: 4294967295,
            nullable: true
        },
        validate: {
            type: 'string',
            enum: Object.values(link_constants_1.MacsecValidationModeOptions),
            nullable: true
        },
        encodingsa: {
            type: 'integer',
            enum: Object.values(link_constants_1.SecureAssociationEncodings),
            nullable: true
        }
    }
};
//# sourceMappingURL=macsec.schema.js.map