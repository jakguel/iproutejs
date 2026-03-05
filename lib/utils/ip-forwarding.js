"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.disable = exports.enable = exports.v6 = exports.v4 = void 0;
const util_1 = require("util");
const child_process_1 = require("child_process");
const ip_forwarding_constants_1 = require("./ip-forwarding.constants");
const command_1 = require("../common/errors/command");
const schemas_1 = require("../common/constants/schemas");
const misc_1 = require("../common/misc");
const promisifiedExec = (0, util_1.promisify)(child_process_1.exec);
function sysctl(path, action, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        let args = ['sysctl'];
        if (action === ip_forwarding_constants_1.SysctlActions.Enable) {
            args = args.concat('-w', path + '=1');
        }
        else if (action === ip_forwarding_constants_1.SysctlActions.Disable) {
            args = args.concat('-w', path + '=0');
        }
        else if (action === ip_forwarding_constants_1.SysctlActions.Status) {
            args = args.concat('--values', path);
        }
        let cmdToExec = args.join(' ');
        if (globalOptions.dryRun) {
            return null;
        }
        const { stdout, stderr } = yield promisifiedExec(cmdToExec);
        if (stderr) {
            const message = stderr.replace(/\n/g, '');
            throw new command_1.CommandError(message, cmdToExec);
        }
        if (action === ip_forwarding_constants_1.SysctlActions.Status) {
            return stdout;
        }
        return null;
    });
}
/**
 * Enables and checks status of IPv4 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v4.enable();
 * await utils.ipForwarding.v4.disable();
 *
 * const status = await utils.ipForwarding.v4.status();
 * ```
 */
exports.v4 = {
    enable: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv4Forwarding, ip_forwarding_constants_1.SysctlActions.Enable, globalOptions),
    disable: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv4Forwarding, ip_forwarding_constants_1.SysctlActions.Disable, globalOptions),
    status: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv4Forwarding, ip_forwarding_constants_1.SysctlActions.Status, globalOptions)
};
/**
 * Enables and checks status of IPv6 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v6.enable();
 * await utils.ipForwarding.v6.disable();
 *
 * const status = await utils.ipForwarding.v6.status();
 * ```
 */
exports.v6 = {
    enable: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv6Forwarding, ip_forwarding_constants_1.SysctlActions.Enable, globalOptions),
    disable: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv6Forwarding, ip_forwarding_constants_1.SysctlActions.Disable, globalOptions),
    status: (globalOptions = {}) => sysctl(ip_forwarding_constants_1.SysctlPaths.Ipv6Forwarding, ip_forwarding_constants_1.SysctlActions.Status, globalOptions)
};
/**
 * Enables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.enable();
 * ```
 */
const enable = (globalOptions = {}) => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all([exports.v4.enable(globalOptions), exports.v6.enable(globalOptions)]);
});
exports.enable = enable;
/**
 * Disables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.disable();
 * ```
 */
const disable = (globalOptions = {}) => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all([exports.v4.disable(globalOptions), exports.v6.disable(globalOptions)]);
});
exports.disable = disable;
/**
 * Checks both IPv4 & IPv6 IP forwarding statuses.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * const status = await utils.ipForwarding.status();
 * ```
 */
const status = (globalOptions = {}) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const results = yield Promise.all([exports.v4.status(globalOptions), exports.v6.status(globalOptions)]);
    return {
        v4: ((_a = results[0]) === null || _a === void 0 ? void 0 : _a.split('\n')[0]) || '',
        v6: ((_b = results[1]) === null || _b === void 0 ? void 0 : _b.split('\n')[0]) || ''
    };
});
exports.status = status;
exports.default = {
    v4: exports.v4,
    v6: exports.v6,
    enable: exports.enable,
    disable: exports.disable,
    status: exports.status
};
//# sourceMappingURL=ip-forwarding.js.map