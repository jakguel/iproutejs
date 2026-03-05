"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePreferences = exports.route = exports.AddressFamilies = exports.AddressScopes = exports.address = exports.XdpOptionTypes = exports.BridgeSlavePortStates = exports.AddrGenMode = exports.SecureAssociationEncodings = exports.MacsecValidationModeOptions = exports.MldVersions = exports.IgmpVersions = exports.MultiCastRouterOptions = exports.HsrProtocols = exports.HsrVersions = exports.MacvlanMacvtapModes = exports.TtlSpecialValues = exports.ErspanDirections = exports.IpoIbModes = exports.IpipSipDeviceModes = exports.SecondaryUdpEncapsulations = exports.DontFragmentFlagValues = exports.VlanProtocols = exports.ExtendedLinkTypes = exports.LinkTypes = exports.link = exports.batch = exports.ParametersError = exports.CommandError = exports.colonSeparatedNumbers = exports.timeWithUnit = exports.commaSeparatedIpv6Addresses = exports.slashSeparatedNumbers = exports.slashSeparatedStrings = exports.ipWithOptionalFamilyPrefix = exports.ipWithRequiredMaskAndAllAndDefaultValues = exports.ipWithOptionalMaskAndAllAndDefaultValues = exports.ipOrAny = exports.ipWithRequiredMask = exports.ipWithOptionalMask = exports.ip = exports.ipv6 = exports.ipv4 = exports.hex4Digits = exports.mac = exports.SchemaIds = exports.EnableDisableAutoToggle = exports.EnableDisableAsStringToggle = exports.EnableDisableToggle = exports.OnOffToggle = void 0;
exports.MonitorCommand = exports.Command = exports.utils = exports.mroute = exports.maddress = exports.TunTapTunnelModes = exports.tuntap = exports.TunnelModes = exports.tunnel = exports.ntable = exports.NudStates = exports.neighbour = exports.addrlabel = exports.MonitorObjects = exports.monitor = exports.RuleTypes = exports.RoutingTables = exports.rule = exports.RouteTypes = exports.RoutingTableProtocols = exports.RouteRoutingTables = exports.EncapTypes = exports.EncapSeg6LocalActions = void 0;
// Special commands not pertaining to a specific command object.
const batchModule = __importStar(require("./commands/batch"));
exports.batch = batchModule;
const batch_1 = __importDefault(require("./commands/batch"));
// Network devices configuration.
const linkModule = __importStar(require("./commands/link"));
exports.link = linkModule;
const link_1 = __importDefault(require("./commands/link"));
// Protocol address management.
const addressModule = __importStar(require("./commands/address"));
exports.address = addressModule;
const address_1 = __importDefault(require("./commands/address"));
// Routing table management.
const routeModule = __importStar(require("./commands/route"));
exports.route = routeModule;
const route_1 = __importDefault(require("./commands/route"));
// Routing policy database (RPDB) management.
const ruleModule = __importStar(require("./commands/rule"));
exports.rule = ruleModule;
const rule_1 = __importDefault(require("./commands/rule"));
// State monitoring.
const monitorModule = __importStar(require("./commands/monitor"));
exports.monitor = monitorModule;
const monitor_1 = __importDefault(require("./commands/monitor"));
// Protocol address label management.
const addrlabelModule = __importStar(require("./commands/addrlabel"));
exports.addrlabel = addrlabelModule;
const addrlabel_1 = __importDefault(require("./commands/addrlabel"));
// Neighbour/ARP tables management.
const neighbourModule = __importStar(require("./commands/neighbour"));
exports.neighbour = neighbourModule;
const neighbour_1 = __importDefault(require("./commands/neighbour"));
// Neighbour table configuration.
const ntableModule = __importStar(require("./commands/ntable"));
exports.ntable = ntableModule;
const ntable_1 = __importDefault(require("./commands/ntable"));
// Tunnel configuration.
const tunnelModule = __importStar(require("./commands/tunnel"));
exports.tunnel = tunnelModule;
const tunnel_1 = __importDefault(require("./commands/tunnel"));
// TunTap configuration.
const tuntapModule = __importStar(require("./commands/tuntap"));
exports.tuntap = tuntapModule;
const tuntap_1 = __importDefault(require("./commands/tuntap"));
// Maddress configuration.
const maddressModule = __importStar(require("./commands/maddress"));
exports.maddress = maddressModule;
const maddress_1 = __importDefault(require("./commands/maddress"));
// Multicast routing cache management.
const mrouteModule = __importStar(require("./commands/mroute"));
exports.mroute = mrouteModule;
const mroute_1 = __importDefault(require("./commands/mroute"));
// General utilities functions to provide extra handy functionality not present in iproute.
const utilsModule = __importStar(require("./utils"));
exports.utils = utilsModule;
const utils_1 = __importDefault(require("./utils"));
// Common.
const command_1 = __importDefault(require("./common/classes/command"));
exports.Command = command_1.default;
const monitor_command_1 = __importDefault(require("./common/classes/monitor-command"));
exports.MonitorCommand = monitor_command_1.default;
//
// Common/Constants.
//
var attribute_values_1 = require("./common/constants/attribute-values");
Object.defineProperty(exports, "OnOffToggle", { enumerable: true, get: function () { return attribute_values_1.OnOffToggle; } });
Object.defineProperty(exports, "EnableDisableToggle", { enumerable: true, get: function () { return attribute_values_1.EnableDisableToggle; } });
Object.defineProperty(exports, "EnableDisableAsStringToggle", { enumerable: true, get: function () { return attribute_values_1.EnableDisableAsStringToggle; } });
Object.defineProperty(exports, "EnableDisableAutoToggle", { enumerable: true, get: function () { return attribute_values_1.EnableDisableAutoToggle; } });
var schemas_1 = require("./common/constants/schemas");
Object.defineProperty(exports, "SchemaIds", { enumerable: true, get: function () { return schemas_1.SchemaIds; } });
var regexes_1 = require("./common/constants/regexes");
Object.defineProperty(exports, "mac", { enumerable: true, get: function () { return regexes_1.mac; } });
Object.defineProperty(exports, "hex4Digits", { enumerable: true, get: function () { return regexes_1.hex4Digits; } });
Object.defineProperty(exports, "ipv4", { enumerable: true, get: function () { return regexes_1.ipv4; } });
Object.defineProperty(exports, "ipv6", { enumerable: true, get: function () { return regexes_1.ipv6; } });
Object.defineProperty(exports, "ip", { enumerable: true, get: function () { return regexes_1.ip; } });
Object.defineProperty(exports, "ipWithOptionalMask", { enumerable: true, get: function () { return regexes_1.ipWithOptionalMask; } });
Object.defineProperty(exports, "ipWithRequiredMask", { enumerable: true, get: function () { return regexes_1.ipWithRequiredMask; } });
Object.defineProperty(exports, "ipOrAny", { enumerable: true, get: function () { return regexes_1.ipOrAny; } });
Object.defineProperty(exports, "ipWithOptionalMaskAndAllAndDefaultValues", { enumerable: true, get: function () { return regexes_1.ipWithOptionalMaskAndAllAndDefaultValues; } });
Object.defineProperty(exports, "ipWithRequiredMaskAndAllAndDefaultValues", { enumerable: true, get: function () { return regexes_1.ipWithRequiredMaskAndAllAndDefaultValues; } });
Object.defineProperty(exports, "ipWithOptionalFamilyPrefix", { enumerable: true, get: function () { return regexes_1.ipWithOptionalFamilyPrefix; } });
Object.defineProperty(exports, "slashSeparatedStrings", { enumerable: true, get: function () { return regexes_1.slashSeparatedStrings; } });
Object.defineProperty(exports, "slashSeparatedNumbers", { enumerable: true, get: function () { return regexes_1.slashSeparatedNumbers; } });
Object.defineProperty(exports, "commaSeparatedIpv6Addresses", { enumerable: true, get: function () { return regexes_1.commaSeparatedIpv6Addresses; } });
Object.defineProperty(exports, "timeWithUnit", { enumerable: true, get: function () { return regexes_1.timeWithUnit; } });
Object.defineProperty(exports, "colonSeparatedNumbers", { enumerable: true, get: function () { return regexes_1.colonSeparatedNumbers; } });
//
// Common/Errors.
//
var command_2 = require("./common/errors/command");
Object.defineProperty(exports, "CommandError", { enumerable: true, get: function () { return command_2.CommandError; } });
var parameters_1 = require("./common/errors/parameters");
Object.defineProperty(exports, "ParametersError", { enumerable: true, get: function () { return parameters_1.ParametersError; } });
var link_constants_1 = require("./commands/link.constants");
Object.defineProperty(exports, "LinkTypes", { enumerable: true, get: function () { return link_constants_1.LinkTypes; } });
Object.defineProperty(exports, "ExtendedLinkTypes", { enumerable: true, get: function () { return link_constants_1.ExtendedLinkTypes; } });
Object.defineProperty(exports, "VlanProtocols", { enumerable: true, get: function () { return link_constants_1.VlanProtocols; } });
Object.defineProperty(exports, "DontFragmentFlagValues", { enumerable: true, get: function () { return link_constants_1.DontFragmentFlagValues; } });
Object.defineProperty(exports, "SecondaryUdpEncapsulations", { enumerable: true, get: function () { return link_constants_1.SecondaryUdpEncapsulations; } });
Object.defineProperty(exports, "IpipSipDeviceModes", { enumerable: true, get: function () { return link_constants_1.IpipSipDeviceModes; } });
Object.defineProperty(exports, "IpoIbModes", { enumerable: true, get: function () { return link_constants_1.IpoIbModes; } });
Object.defineProperty(exports, "ErspanDirections", { enumerable: true, get: function () { return link_constants_1.ErspanDirections; } });
Object.defineProperty(exports, "TtlSpecialValues", { enumerable: true, get: function () { return link_constants_1.TtlSpecialValues; } });
Object.defineProperty(exports, "MacvlanMacvtapModes", { enumerable: true, get: function () { return link_constants_1.MacvlanMacvtapModes; } });
Object.defineProperty(exports, "HsrVersions", { enumerable: true, get: function () { return link_constants_1.HsrVersions; } });
Object.defineProperty(exports, "HsrProtocols", { enumerable: true, get: function () { return link_constants_1.HsrProtocols; } });
Object.defineProperty(exports, "MultiCastRouterOptions", { enumerable: true, get: function () { return link_constants_1.MultiCastRouterOptions; } });
Object.defineProperty(exports, "IgmpVersions", { enumerable: true, get: function () { return link_constants_1.IgmpVersions; } });
Object.defineProperty(exports, "MldVersions", { enumerable: true, get: function () { return link_constants_1.MldVersions; } });
Object.defineProperty(exports, "MacsecValidationModeOptions", { enumerable: true, get: function () { return link_constants_1.MacsecValidationModeOptions; } });
Object.defineProperty(exports, "SecureAssociationEncodings", { enumerable: true, get: function () { return link_constants_1.SecureAssociationEncodings; } });
Object.defineProperty(exports, "AddrGenMode", { enumerable: true, get: function () { return link_constants_1.AddrGenMode; } });
Object.defineProperty(exports, "BridgeSlavePortStates", { enumerable: true, get: function () { return link_constants_1.BridgeSlavePortStates; } });
Object.defineProperty(exports, "XdpOptionTypes", { enumerable: true, get: function () { return link_constants_1.XdpOptionTypes; } });
var address_constants_1 = require("./commands/address.constants");
Object.defineProperty(exports, "AddressScopes", { enumerable: true, get: function () { return address_constants_1.AddressScopes; } });
Object.defineProperty(exports, "AddressFamilies", { enumerable: true, get: function () { return address_constants_1.AddressFamilies; } });
var route_constants_1 = require("./commands/route.constants");
Object.defineProperty(exports, "RoutePreferences", { enumerable: true, get: function () { return route_constants_1.RoutePreferences; } });
Object.defineProperty(exports, "EncapSeg6LocalActions", { enumerable: true, get: function () { return route_constants_1.EncapSeg6LocalActions; } });
Object.defineProperty(exports, "EncapTypes", { enumerable: true, get: function () { return route_constants_1.EncapTypes; } });
var show_constants_1 = require("./commands/route/show.constants");
Object.defineProperty(exports, "RouteRoutingTables", { enumerable: true, get: function () { return show_constants_1.RouteRoutingTables; } });
Object.defineProperty(exports, "RoutingTableProtocols", { enumerable: true, get: function () { return show_constants_1.RoutingTableProtocols; } });
Object.defineProperty(exports, "RouteTypes", { enumerable: true, get: function () { return show_constants_1.RouteTypes; } });
var rule_constants_1 = require("./commands/rule.constants");
Object.defineProperty(exports, "RoutingTables", { enumerable: true, get: function () { return rule_constants_1.RoutingTables; } });
Object.defineProperty(exports, "RuleTypes", { enumerable: true, get: function () { return rule_constants_1.RuleTypes; } });
var monitor_constants_1 = require("./commands/monitor.constants");
Object.defineProperty(exports, "MonitorObjects", { enumerable: true, get: function () { return monitor_constants_1.MonitorObjects; } });
var neighbour_constants_1 = require("./commands/neighbour.constants");
Object.defineProperty(exports, "NudStates", { enumerable: true, get: function () { return neighbour_constants_1.NudStates; } });
var tunnel_constants_1 = require("./commands/tunnel.constants");
Object.defineProperty(exports, "TunnelModes", { enumerable: true, get: function () { return tunnel_constants_1.TunnelModes; } });
var tuntap_constants_1 = require("./commands/tuntap.constants");
Object.defineProperty(exports, "TunTapTunnelModes", { enumerable: true, get: function () { return tuntap_constants_1.TunTapTunnelModes; } });
/** @hidden **/
exports.default = {
    // Special methods not pertaining to IP commands.
    batch: batch_1.default,
    // IP Commands.
    link: link_1.default,
    address: address_1.default,
    rule: rule_1.default,
    route: route_1.default,
    monitor: monitor_1.default,
    addrlabel: addrlabel_1.default,
    neighbour: neighbour_1.default,
    ntable: ntable_1.default,
    tunnel: tunnel_1.default,
    tuntap: tuntap_1.default,
    maddress: maddress_1.default,
    mroute: mroute_1.default,
    // Extras.
    utils: utils_1.default
};
//# sourceMappingURL=index.js.map