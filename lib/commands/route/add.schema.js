"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteAddSchema = void 0;
const attribute_values_1 = require("../../common/constants/attribute-values");
const schemas_1 = require("../../common/constants/schemas");
const address_constants_1 = require("../address.constants");
const route_constants_1 = require("../route.constants");
const bpf_schema_1 = require("./encap-types/bpf.schema");
const ioam6_schema_1 = require("./encap-types/ioam6.schema");
const ip_schema_1 = require("./encap-types/ip.schema");
const mpls_schema_1 = require("./encap-types/mpls.schema");
const seg6_schema_1 = require("./encap-types/seg6.schema");
const seg6local_schema_1 = require("./encap-types/seg6local.schema");
const show_constants_1 = require("./show.constants");
exports.RouteAddSchema = {
    $id: schemas_1.SchemaIds.RouteAdd,
    type: 'object',
    required: ['to'],
    properties: {
        type: {
            type: 'string',
            enum: Object.values(show_constants_1.RouteTypes),
            nullable: true,
            keyless: true
        },
        to: {
            type: 'string',
            format: 'ip-with-optional-mask-and-all-and-default-values',
            keyless: true
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        dsfield: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        table: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RouteRoutingTables),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        proto: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RoutingTableProtocols),
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
        protocol: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RoutingTableProtocols),
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
        preference: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        'ttl-propagate': {
            type: 'string',
            enum: Object.values(attribute_values_1.EnableDisableAsStringToggle),
            nullable: true
        },
        encap: {
            type: 'object',
            nullable: true,
            properties: {
                [route_constants_1.EncapTypes.Mpls]: mpls_schema_1.RouteMplsEncapArgsSchema,
                [route_constants_1.EncapTypes.Ip]: ip_schema_1.RouteIpEncapArgsSchema,
                [route_constants_1.EncapTypes.Bpf]: bpf_schema_1.RouteBpfEncapArgsSchema,
                [route_constants_1.EncapTypes.Seg6]: seg6_schema_1.RouteSeg6EncapArgsSchema,
                [route_constants_1.EncapTypes.Seg6local]: seg6local_schema_1.RouteSeg6LocalEncapArgsSchema,
                [route_constants_1.EncapTypes.Ioam6]: ioam6_schema_1.RouteIoam6EncapArgsSchema
            }
        },
        via: {
            type: 'object',
            required: ['address'],
            nullable: true,
            properties: {
                family: {
                    type: 'string',
                    enum: Object.values(address_constants_1.AddressFamilies),
                    nullable: true
                },
                address: {
                    type: 'string',
                    format: 'ip-with-optional-mask',
                    keyless: true
                }
            }
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        weight: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        onlink: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        pervasive: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        nhid: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        mtu: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        advmss: {
            type: 'integer',
            minimum: 1,
            nullable: true
        },
        as: {
            type: 'object',
            required: ['address'],
            nullable: true,
            properties: {
                to: {
                    type: 'boolean',
                    enum: [true],
                    nullable: true
                },
                address: {
                    type: 'string',
                    format: 'ip'
                }
            }
        },
        rtt: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    format: 'time-with-unit',
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        rttvar: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    format: 'time-with-unit',
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        reordering: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        window: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        cwnd: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        ssthresh: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        realms: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        rto_min: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    format: 'time-with-unit',
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        initcwnd: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        initrwnd: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        features: {
            type: 'object',
            required: ['ecn'],
            nullable: true,
            properties: {
                ecn: {
                    type: 'boolean',
                    enum: [true]
                }
            }
        },
        quickack: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        congctl: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        pref: {
            type: 'string',
            enum: Object.values(route_constants_1.RoutePreferences),
            nullable: true
        },
        expires: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        fastopen_no_cookie: {
            type: 'boolean',
            nullable: true
        },
        nexthops: {
            type: 'array',
            nullable: true,
            minItems: 1,
            keyless: true,
            items: {
                type: 'object',
                required: ['nexthop'],
                properties: {
                    nexthop: {
                        type: 'boolean',
                        enum: [true]
                    },
                    via: {
                        type: 'object',
                        required: ['address'],
                        nullable: true,
                        properties: {
                            family: {
                                type: 'string',
                                enum: Object.values(address_constants_1.AddressFamilies),
                                nullable: true
                            },
                            address: {
                                type: 'string',
                                format: 'ip-with-optional-mask'
                            }
                        }
                    },
                    dev: {
                        type: 'string',
                        minLength: 1,
                        nullable: true
                    },
                    weight: {
                        type: 'integer',
                        minimum: 1,
                        nullable: true
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=add.schema.js.map