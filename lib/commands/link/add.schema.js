"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkAddSchema = exports.typePropertiesSchema = void 0;
const link_constants_1 = require("../link.constants");
const schemas_1 = require("../../common/constants/schemas");
const bareup_schema_1 = require("./virtual-link-types/bareup.schema");
const bridge_schema_1 = require("./virtual-link-types/bridge.schema");
const erspan_ip6erspan_schema_1 = require("./virtual-link-types/erspan-ip6erspan.schema");
const geneve_schema_1 = require("./virtual-link-types/geneve.schema");
const gre_gretap_schema_1 = require("./virtual-link-types/gre-gretap.schema");
const hsr_schema_1 = require("./virtual-link-types/hsr.schema");
const ip6gre_ip6gretap_schema_1 = require("./virtual-link-types/ip6gre-ip6gretap.schema");
const ipip_sit_schema_1 = require("./virtual-link-types/ipip-sit.schema");
const ipoib_schema_1 = require("./virtual-link-types/ipoib.schema");
const macsec_schema_1 = require("./virtual-link-types/macsec.schema");
const macvlan_macvtap_schema_1 = require("./virtual-link-types/macvlan-macvtap.schema");
const rmnet_schema_1 = require("./virtual-link-types/rmnet.schema");
const veth_vxcan_schema_1 = require("./virtual-link-types/veth-vxcan.schema");
const vlan_schema_1 = require("./virtual-link-types/vlan.schema");
const vrf_schema_1 = require("./virtual-link-types/vrf.schema");
const vxlan_schema_1 = require("./virtual-link-types/vxlan.schema");
const xfrm_schema_1 = require("./virtual-link-types/xfrm.schema");
const can_schema_1 = require("./virtual-link-types/can.schema");
exports.typePropertiesSchema = {
    [link_constants_1.LinkTypes.Vlan]: vlan_schema_1.AddLinkVlanArgsSchema,
    [link_constants_1.LinkTypes.Vxlan]: vxlan_schema_1.AddLinkVxlanArgsSchema,
    [link_constants_1.LinkTypes.Veth]: veth_vxcan_schema_1.AddLinkVethVxcanArgsSchema,
    [link_constants_1.LinkTypes.Vxcan]: veth_vxcan_schema_1.AddLinkVethVxcanArgsSchema,
    [link_constants_1.LinkTypes.Can]: can_schema_1.AddLinkCanArgsSchema,
    [link_constants_1.LinkTypes.Ipip]: ipip_sit_schema_1.AddLinkIpipSipArgsSchema,
    [link_constants_1.LinkTypes.Sit]: ipip_sit_schema_1.AddLinkIpipSipArgsSchema,
    [link_constants_1.LinkTypes.Gre]: gre_gretap_schema_1.AddGreGretapArgsSchema,
    [link_constants_1.LinkTypes.Gretap]: gre_gretap_schema_1.AddGreGretapArgsSchema,
    [link_constants_1.LinkTypes.Ip6gre]: ip6gre_ip6gretap_schema_1.AddLinkIp6GreIp6GretapArgsSchema,
    [link_constants_1.LinkTypes.Ip6gretap]: ip6gre_ip6gretap_schema_1.AddLinkIp6GreIp6GretapArgsSchema,
    [link_constants_1.LinkTypes.Ipoib]: ipoib_schema_1.AddLinkIpoibArgsSchema,
    [link_constants_1.LinkTypes.Erspan]: erspan_ip6erspan_schema_1.AddLinkErspanIp6ErspanArgsSchema,
    [link_constants_1.LinkTypes.Ip6erspan]: erspan_ip6erspan_schema_1.AddLinkErspanIp6ErspanArgsSchema,
    [link_constants_1.LinkTypes.Geneve]: geneve_schema_1.AddLinkGeneveArgsSchema,
    [link_constants_1.LinkTypes.Bareudp]: bareup_schema_1.AddLinkBareudpArgsSchema,
    [link_constants_1.LinkTypes.Macvlan]: macvlan_macvtap_schema_1.AddLinkMacvlanMacvtapArgsSchema,
    [link_constants_1.LinkTypes.Macvtap]: macvlan_macvtap_schema_1.AddLinkMacvlanMacvtapArgsSchema,
    [link_constants_1.LinkTypes.Hsr]: hsr_schema_1.AddLinkHsrArgsSchema,
    [link_constants_1.LinkTypes.Vrf]: vrf_schema_1.AddLinkVrfArgsSchema,
    [link_constants_1.LinkTypes.Rmnet]: rmnet_schema_1.AddLinkRmnetArgsSchema,
    [link_constants_1.LinkTypes.Xfrm]: xfrm_schema_1.AddLinkXfrmArgsSchema,
    [link_constants_1.LinkTypes.Bridge]: bridge_schema_1.AddLinkBridgeArgsSchema,
    [link_constants_1.LinkTypes.Macsec]: macsec_schema_1.AddLinkMacsecArgsSchema,
    [link_constants_1.LinkTypes.Bond]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Dummy]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Ifb]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Vcan]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Ip6tnl]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Vti]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Nlmon]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Ipvlan]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Ipvtap]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Lowpan]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    },
    [link_constants_1.LinkTypes.Netdevsim]: {
        type: 'boolean',
        enum: [true],
        nullable: true
    }
};
exports.LinkAddSchema = {
    $id: schemas_1.SchemaIds.LinkAdd,
    type: 'object',
    required: ['name', 'type'],
    properties: {
        link: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 15
        },
        txqueuelen: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        address: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        broadcast: {
            type: 'string',
            format: 'mac',
            nullable: true
        },
        mtu: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        index: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        numtxqueues: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        numrxqueues: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        gso_max_size: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        gso_max_segs: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        type: {
            type: 'object',
            properties: exports.typePropertiesSchema
        }
    }
};
//# sourceMappingURL=add.schema.js.map