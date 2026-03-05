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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v6Rd = exports.prl = exports.show = exports.change = exports.del = exports.add = void 0;
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const add_schema_1 = require("./tunnel/add.schema");
const prl_schema_1 = require("./tunnel/prl.schema");
const _6rd_schema_1 = require("./tunnel/6rd.schema");
/**
 * Add a new tunnel.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Create a new tunnel
 * ```
 * await tunnel.add({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Gre,
 *   remote: '203.0.113.4',
 *   local : '203.0.113.5',
 *   dev   : 'eth0'
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.TunnelAdd, add_schema_1.TunnelAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Destroy a tunnel.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await tunnel.del({
 *   name: 'tun0'
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', 'del'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.TunnelAdd, add_schema_1.TunnelAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Change an existing tunnel.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Modify an existing tunnel
 * ```
 * await tunnel.change({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Ipip,
 *   remote: '203.0.113.6',
 *   local : '203.0.113.7',
 *   dev   : 'eth1'
 * });
 * ```
 */
function change(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', 'change'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.TunnelAdd, add_schema_1.TunnelAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.change = change;
/**
 * List tunnels.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Show tunnels
 * ```
 * const entries = await tunnel.show({});
 * ```
 */
function show(globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
/**
 * Potential router list (ISATAP only).
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function prl(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', 'prl'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.TunnelPrl, prl_schema_1.TunnelPrlSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.prl = prl;
/**
 * Specifies the 6rd (IPv6 Rapid Deployment) tunneling mechanism.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Configures 6rd tunneling mechanism.
 * ```
 * await tunnel.6rd({
 *   dev        : 'eth0',
 *   6rd_prefix : '2001:db8::'
 * });
 * ```
 */
function v6Rd(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'tunnel', '6rd'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.Tunnel6rd, _6rd_schema_1.Tunnel6rdSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.v6Rd = v6Rd;
exports.default = {
    add,
    del,
    change,
    show,
    prl,
    v6Rd
};
//# sourceMappingURL=tunnel.js.map