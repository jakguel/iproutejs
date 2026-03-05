"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetLinkBridgeSlaveArgsSchema = void 0;
const attribute_values_1 = require("../../../common/constants/attribute-values");
const link_constants_1 = require("../../link.constants");
exports.SetLinkBridgeSlaveArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        fdb_flush: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        state: {
            type: 'integer',
            enum: Object.values(link_constants_1.BridgeSlavePortStates),
            nullable: true
        },
        priority: {
            type: 'integer',
            minimum: 0,
            maximum: 63,
            nullable: true
        },
        cost: {
            type: 'integer',
            minimum: 1,
            maximum: 65535,
            nullable: true
        },
        guard: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        hairpin: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        fastleave: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        root_block: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        learning: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        flood: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        proxy_arp: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        proxy_arp_wifi: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        mcast_router: {
            type: 'integer',
            minimum: 0,
            maximum: 3,
            nullable: true
        },
        mcast_fast_leave: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        mcast_flood: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        mcast_to_unicast: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        group_fwd_mask: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        neigh_suppress: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        vlan_tunnel: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        isolated: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        backup_port: {
            type: 'string',
            minLength: 0,
            nullable: true
        },
        nobackup_port: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=bridge-slave.schema.js.map