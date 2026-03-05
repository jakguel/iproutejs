"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpCommandTestOptionsSchema = exports.EmptySchema = exports.StdinGlobalOptionSchema = exports.FilePathGlobalOptionSchema = exports.GlobalOptionsSchema = exports.SchemaIds = void 0;
const tests_1 = require("./tests");
/**
 * Schema ids.
 *
 * @category Constants
 * @internal
 */
var SchemaIds;
(function (SchemaIds) {
    SchemaIds["Empty"] = "#empty-schema";
    SchemaIds["GlobalOptions"] = "#global-options";
    SchemaIds["FilePathGlobalOption"] = "#global-options-file-path";
    SchemaIds["StdinGlobalOption"] = "#global-options-stdin";
    SchemaIds["ComplexIpCommandTestOptions"] = "#complex-ip-command-test-options";
    SchemaIds["RoutingTablesOptions"] = "#routing-tables-options";
    SchemaIds["LinkAdd"] = "#link-add";
    SchemaIds["LinkDelete"] = "#link-delete";
    SchemaIds["LinkShow"] = "#link-show";
    SchemaIds["LinkSet"] = "#link-set";
    SchemaIds["AddressAdd"] = "#address-add";
    SchemaIds["AddressDelete"] = "#address-delete";
    SchemaIds["AddressFlush"] = "#address-flush";
    SchemaIds["AddressShow"] = "#address-show";
    SchemaIds["RuleAdd"] = "#rule-add";
    SchemaIds["RuleShow"] = "#rule-show";
    SchemaIds["RouteShow"] = "#route-show";
    SchemaIds["RouteGet"] = "#route-get";
    SchemaIds["RouteAdd"] = "#route-add";
    SchemaIds["Monitor"] = "#monitor";
    SchemaIds["AddrlabelAdd"] = "#addrlabel-add";
    SchemaIds["AddrlabelDel"] = "#addrlabel-del";
    SchemaIds["NeighbourAdd"] = "#neighbour-add";
    SchemaIds["NeighbourDel"] = "#neighbour-del";
    SchemaIds["NeighbourShow"] = "#neighbour-show";
    SchemaIds["NeighbourGet"] = "#neighbour-get";
    SchemaIds["NtableShow"] = "#ntable-show";
    SchemaIds["NtableChange"] = "#ntable-change";
    SchemaIds["TunnelAdd"] = "#tunnel-add";
    SchemaIds["Tunnel6rd"] = "#tunnel-6rd";
    SchemaIds["TunnelPrl"] = "#tunnel-prl";
    SchemaIds["TunTapAdd"] = "#tuntap-add";
    SchemaIds["TunTapShow"] = "#tuntap-show";
    SchemaIds["MaddressAdd"] = "#maddress-add";
    SchemaIds["MaddressShow"] = "#maddress-show";
    SchemaIds["MrouteShow"] = "#mroute-show";
})(SchemaIds || (exports.SchemaIds = SchemaIds = {}));
exports.GlobalOptionsSchema = {
    $id: SchemaIds.GlobalOptions,
    type: 'object',
    properties: {
        sudo: {
            type: 'boolean',
            default: false,
            nullable: true
        },
        dryRun: {
            type: 'boolean',
            default: false,
            nullable: true
        },
        filePath: {
            type: 'string',
            format: 'filepath',
            nullable: true
        },
        stdin: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        '-4': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-6': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-B': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-M': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-0': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-oneline': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-details': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-statistics': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-json': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        '-tshort': {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
exports.FilePathGlobalOptionSchema = {
    $id: SchemaIds.FilePathGlobalOption,
    type: 'object',
    required: ['filePath'],
    additionalProperties: true,
    properties: {
        filePath: {
            type: 'string',
            format: 'filepath'
        }
    }
};
exports.StdinGlobalOptionSchema = {
    $id: SchemaIds.StdinGlobalOption,
    type: 'object',
    required: ['stdin'],
    additionalProperties: true,
    properties: {
        stdin: {
            type: 'string',
            minLength: 1
        }
    }
};
exports.EmptySchema = {
    $id: SchemaIds.Empty,
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {}
};
exports.IpCommandTestOptionsSchema = {
    $id: SchemaIds.ComplexIpCommandTestOptions,
    type: 'object',
    required: [
        'aString',
        'aNumber',
        'anEnum',
        'aFlag',
        'noaFlag',
        'aTuple',
        'anArray',
        'nestedInvisibleKey'
    ],
    properties: {
        aString: {
            type: 'string'
        },
        aNumber: {
            type: 'number',
            minimum: 0
        },
        anEnum: {
            type: 'string',
            enum: Object.values(tests_1.TestEnum)
        },
        aFlag: {
            type: 'boolean'
        },
        noaFlag: {
            type: 'boolean'
        },
        number: {
            type: 'number',
            keyless: true,
            nullable: true
        },
        aTuple: {
            type: 'array',
            items: [
                {
                    type: 'number',
                    minimum: 0
                },
                {
                    type: 'number',
                    minimum: 0
                }
            ],
            minItems: 2,
            maxItems: 2
        },
        anArray: {
            type: 'array',
            items: {
                type: 'object',
                required: ['aNumber'],
                properties: {
                    aNumber: {
                        type: 'number'
                    },
                    aStringWithDefaultValue: {
                        type: 'string',
                        default: 'default-value',
                        nullable: true
                    }
                }
            }
        },
        nestedInvisibleKey: {
            type: 'object',
            keyless: true,
            required: [
                'aString',
                'aNumber',
                'anEnum',
                'aFlag',
                'noaFlag',
                'aTuple',
                'anArray'
            ],
            properties: {
                aString: {
                    type: 'string'
                },
                aNumber: {
                    type: 'number',
                    minimum: 0
                },
                anEnum: {
                    type: 'string',
                    enum: Object.values(tests_1.TestEnum)
                },
                aFlag: {
                    type: 'boolean'
                },
                noaFlag: {
                    type: 'boolean'
                },
                number: {
                    type: 'number',
                    keyless: true,
                    nullable: true
                },
                aTuple: {
                    type: 'array',
                    items: [
                        {
                            type: 'number',
                            minimum: 0
                        },
                        {
                            type: 'number',
                            minimum: 0
                        }
                    ],
                    minItems: 2,
                    maxItems: 2
                },
                anArray: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: ['aNumber'],
                        properties: {
                            aNumber: {
                                type: 'number'
                            },
                            aStringWithDefaultValue: {
                                type: 'string',
                                default: 'default-value',
                                nullable: true
                            }
                        }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=schemas.js.map