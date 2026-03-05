"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkBridgeArgsSchema = void 0;
const attribute_values_1 = require("../../../common/constants/attribute-values");
const link_constants_1 = require("../../link.constants");
exports.AddLinkBridgeArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        ageing_time: {
            type: 'integer',
            minimum: 1,
            maximum: 1000000,
            nullable: true
        },
        group_fwd_mask: {
            type: 'integer',
            minimum: 0,
            maximum: 65535,
            nullable: true
        },
        group_address: {
            type: 'string',
            minLength: 1,
            format: 'mac',
            nullable: true
        },
        forward_delay: {
            type: 'integer',
            minimum: 2,
            maximum: 30,
            nullable: true
        },
        hello_time: {
            type: 'integer',
            minimum: 1,
            maximum: 10,
            nullable: true
        },
        max_age: {
            type: 'integer',
            minimum: 6,
            maximum: 40,
            nullable: true
        },
        stp_state: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        priority: {
            type: 'integer',
            minimum: 0,
            maximum: 65535,
            nullable: true
        },
        vlan_filtering: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        vlan_protocol: {
            type: 'string',
            enum: Object.values(link_constants_1.VlanProtocols),
            nullable: true
        },
        vlan_default_pvid: {
            type: 'integer',
            minimum: 0,
            maximum: 4095,
            nullable: true
        },
        vlan_stats_enabled: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        vlan_stats_per_port: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        mcast_snooping: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        mcast_router: {
            type: 'integer',
            enum: Object.values(link_constants_1.MultiCastRouterOptions),
            nullable: true
        },
        mcast_query_use_ifaddr: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        mcast_querier: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        mcast_hash_elasticity: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_hash_max: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_last_member_count: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_startup_query_count: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_last_member_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_membership_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_querier_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_query_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_query_response_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_startup_query_interval: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        mcast_stats_enabled: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        mcast_igmp_version: {
            type: 'integer',
            enum: Object.values(link_constants_1.IgmpVersions),
            nullable: true
        },
        mcast_mld_version: {
            type: 'integer',
            enum: Object.values(link_constants_1.MldVersions),
            nullable: true
        },
        nf_call_iptables: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        nf_call_ip6tables: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        },
        nf_call_arptables: {
            type: 'integer',
            enum: Object.values(attribute_values_1.EnableDisableToggle),
            nullable: true
        }
    }
};
//# sourceMappingURL=bridge.schema.js.map