"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysctlPaths = exports.SysctlActions = void 0;
/**
 * Sysctl actions.
 *
 * @category Constants
 * @internal
 */
var SysctlActions;
(function (SysctlActions) {
    SysctlActions["Enable"] = "enable";
    SysctlActions["Disable"] = "disable";
    SysctlActions["Status"] = "status";
})(SysctlActions || (exports.SysctlActions = SysctlActions = {}));
/**
 * Sysctl paths.
 *
 * @category Constants
 * @internal
 */
var SysctlPaths;
(function (SysctlPaths) {
    SysctlPaths["Ipv4Forwarding"] = "net.ipv4.ip_forward";
    SysctlPaths["Ipv6Forwarding"] = "net.ipv6.conf.all.forwarding";
})(SysctlPaths || (exports.SysctlPaths = SysctlPaths = {}));
//# sourceMappingURL=ip-forwarding.constants.js.map