"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSeg6LocalEncapArgsSchema = exports.EndB6Seg6LocalEncapArgsSchema = exports.EndDt6Seg6LocalEncapArgsSchema = exports.EndXSeg6LocalEncapArgsSchema = void 0;
const address_constants_1 = require("../../address.constants");
const route_constants_1 = require("../../route.constants");
const show_constants_1 = require("../show.constants");
exports.EndXSeg6LocalEncapArgsSchema = {
    type: 'object',
    required: ['nh6'],
    properties: {
        nh6: {
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
};
exports.EndDt6Seg6LocalEncapArgsSchema = {
    type: 'object',
    required: [],
    properties: {
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
        vrftable: {
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
};
exports.EndB6Seg6LocalEncapArgsSchema = {
    type: 'object',
    required: ['srh', 'segs'],
    properties: {
        srh: {
            type: 'boolean',
            enum: [true]
        },
        segs: {
            type: 'string',
            format: 'comma-separated-ipv6-addresses'
        },
        hmac: {
            type: 'integer',
            minimum: 0,
            nullable: true
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
};
exports.RouteSeg6LocalEncapArgsSchema = {
    type: 'object',
    nullable: true,
    required: ['action'],
    properties: {
        action: {
            type: 'object',
            properties: {
                [route_constants_1.EncapSeg6LocalActions.End]: {
                    type: 'boolean',
                    enum: [true],
                    nullable: true
                },
                [route_constants_1.EncapSeg6LocalActions.EndX]: exports.EndXSeg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndDX6]: exports.EndXSeg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndDT6]: exports.EndDt6Seg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndDT4]: exports.EndDt6Seg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndDT46]: exports.EndDt6Seg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndB6]: exports.EndB6Seg6LocalEncapArgsSchema,
                [route_constants_1.EncapSeg6LocalActions.EndB6Encaps]: exports.EndB6Seg6LocalEncapArgsSchema
            }
        },
        count: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=seg6local.schema.js.map