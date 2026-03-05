"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkVlanArgsSchema = void 0;
const attribute_values_1 = require("../../../common/constants/attribute-values");
const link_constants_1 = require("../../link.constants");
exports.AddLinkVlanArgsSchema = {
    type: 'object',
    required: ['protocol', 'id'],
    additionalProperties: false,
    properties: {
        protocol: {
            type: 'string',
            enum: Object.values(link_constants_1.VlanProtocols)
        },
        id: {
            type: 'integer',
            minimum: 0,
            maximum: 4095
        },
        reorder_hdr: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        gvrp: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        mvrp: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        loose_binding: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        bridge_binding: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'ingress-qos-map': {
            type: 'array',
            minItems: 1,
            nullable: true,
            items: {
                type: 'string',
                format: 'colon-separated-numbers'
            }
        },
        'egress-qos-map': {
            type: 'array',
            minItems: 1,
            nullable: true,
            items: {
                type: 'string',
                format: 'colon-separated-numbers'
            }
        }
    }
};
//# sourceMappingURL=vlan.schema.js.map