"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TunnelModes = void 0;
/**
 * Tunnel available modes.
 * @category Constants
 */
var TunnelModes;
(function (TunnelModes) {
    // IPv4
    TunnelModes["Ipip"] = "ipip";
    TunnelModes["Sit"] = "sit";
    TunnelModes["Isatap"] = "isatap";
    TunnelModes["Gre"] = "gre";
    //
    // IPv6
    //
    TunnelModes["Ip6ip6"] = "ip6ip6";
    TunnelModes["Ipip6"] = "ipip6";
    TunnelModes["Ip6gre"] = "ip6gre";
    TunnelModes["vti6"] = "vti6";
    TunnelModes["Any"] = "any";
})(TunnelModes || (exports.TunnelModes = TunnelModes = {}));
//# sourceMappingURL=tunnel.constants.js.map