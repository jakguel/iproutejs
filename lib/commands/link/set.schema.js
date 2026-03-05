"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSetSchema = exports.extendedTypesPropertiesSchema = exports.xdpOptionsPropertiesSchema = void 0;
const attribute_values_1 = require("../../common/constants/attribute-values");
const link_constants_1 = require("../link.constants");
const schemas_1 = require("../../common/constants/schemas");
const bond_slave_schema_1 = require("./extended-virtual-link-types/bond-slave.schema");
const bridge_slave_schema_1 = require("./extended-virtual-link-types/bridge-slave.schema");
const macvlan_macvtap_schema_1 = require("./virtual-link-types/macvlan-macvtap.schema");
const object_schema_1 = require("./xdp-options/object.schema");
const pinned_schema_1 = require("./xdp-options/pinned.schema");
const off_schema_1 = require("./xdp-options/off.schema");
const add_schema_1 = require("./add.schema");
exports.xdpOptionsPropertiesSchema = {
    [link_constants_1.XdpOptionTypes.Off]: off_schema_1.LinkSetXdpOffOptionsSchema,
    [link_constants_1.XdpOptionTypes.Object]: object_schema_1.LinkSetXdpObjectOptionsSchema,
    [link_constants_1.XdpOptionTypes.Pinned]: pinned_schema_1.LinkSetXdpPinnedOptionsSchema
};
exports.extendedTypesPropertiesSchema = Object.assign(Object.assign({}, add_schema_1.typePropertiesSchema), { [link_constants_1.ExtendedLinkTypes.BridgeSlave]: bridge_slave_schema_1.SetLinkBridgeSlaveArgsSchema, [link_constants_1.ExtendedLinkTypes.BondSlave]: bond_slave_schema_1.SetLinkBondSlaveArgsSchema, [link_constants_1.ExtendedLinkTypes.Macsec]: macvlan_macvtap_schema_1.SetLinkMacvlanMacvtapArgsSchema });
exports.LinkSetSchema = {
    $id: schemas_1.SchemaIds.LinkSet,
    type: 'object',
    required: [],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            keyless: true,
            nullable: true
        },
        group: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        up: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        down: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        type: {
            type: 'object',
            nullable: true,
            properties: exports.extendedTypesPropertiesSchema
        },
        arp: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        dynamic: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        multicast: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        allmulticast: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        promisc: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        protodown: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        protodown_reason: {
            type: 'object',
            required: ['name', 'enable'],
            nullable: true,
            properties: {
                name: {
                    type: 'integer',
                    minimum: 0,
                    maximum: 2147483647,
                    keyless: true
                },
                enable: {
                    type: 'string',
                    enum: Object.values(attribute_values_1.OnOffToggle),
                    keyless: true
                }
            }
        },
        trailers: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        txqueuelen: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        name: {
            type: 'string',
            format: 'mac',
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
        netns: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
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
        'link-netnsid': {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        alias: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        vf: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        vf_args: {
            type: 'object',
            nullable: true,
            keyless: true,
            properties: {
                mac: {
                    type: 'string',
                    format: 'mac',
                    nullable: true
                },
                vlan_list: {
                    type: 'array',
                    nullable: true,
                    keyless: true,
                    items: {
                        type: 'object',
                        required: ['vlan'],
                        properties: {
                            vlan: {
                                type: 'integer',
                                minimum: 0,
                                maximum: 4095
                            },
                            qos: {
                                type: 'integer',
                                minimum: 0,
                                nullable: true
                            },
                            proto: {
                                type: 'string',
                                enum: Object.values(link_constants_1.VlanProtocols),
                                nullable: true
                            }
                        }
                    }
                },
                rate: {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                },
                max_tx_rate: {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                },
                min_tx_rate: {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                },
                spoofchk: {
                    type: 'string',
                    enum: Object.values(attribute_values_1.OnOffToggle),
                    nullable: true
                },
                query_rss: {
                    type: 'string',
                    enum: Object.values(attribute_values_1.OnOffToggle),
                    nullable: true
                },
                state: {
                    type: 'string',
                    enum: Object.values(attribute_values_1.EnableDisableAutoToggle),
                    nullable: true
                },
                trust: {
                    type: 'string',
                    enum: Object.values(attribute_values_1.OnOffToggle),
                    nullable: true
                },
                node_guid: {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                },
                port_guid: {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            }
        },
        xdp: {
            type: 'object',
            required: [],
            nullable: true,
            properties: exports.xdpOptionsPropertiesSchema
        },
        xdpgeneric: {
            type: 'object',
            required: [],
            nullable: true,
            properties: exports.xdpOptionsPropertiesSchema
        },
        xdpdrv: {
            type: 'object',
            required: [],
            nullable: true,
            properties: exports.xdpOptionsPropertiesSchema
        },
        xdpoffload: {
            type: 'object',
            required: [],
            nullable: true,
            properties: exports.xdpOptionsPropertiesSchema
        },
        master: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        nomaster: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        addrgenmode: {
            type: 'string',
            enum: Object.values(link_constants_1.AddrGenMode),
            nullable: true
        }
    }
};
//# sourceMappingURL=set.schema.js.map