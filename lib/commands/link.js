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
exports.set = exports.show = exports.del = exports.add = void 0;
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const add_schema_1 = require("./link/add.schema");
const delete_schema_1 = require("./link/delete.schema");
const set_schema_1 = require("./link/set.schema");
const show_schema_1 = require("./link/show.schema");
/**
 * Adds a virtual link.
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
 * import { link } from 'iproute';
 * ```
 *
 * Add a link
 * ```
 * await link.add({
 *   link:    'lo',
 *   name:    'dummy100',
 *   address: '00:11:22:33:44:55',
 *   mtu:     1500,
 *   type:    VirtualLinkTypes.Dummy
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'link', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.LinkAdd, add_schema_1.LinkAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Deletes a virtual link.
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
 * import { link } from 'iproute';
 * ```
 *
 * Delete a link
 * ```
 * await link.del({
 *   dev: 'eth0.1@eth0'
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'link', 'delete'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.LinkDelete, delete_schema_1.LinkDeleteSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Display device attributes.
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
 * import { link } from 'iproute';
 * ```
 *
 * Show link information about the `eth0` device
 * ```
 * const links = await link.show({
 *   dev: 'eth0'
 * });
 * ```
 *
 * Shortcut to show all links
 * ```
 * const links = await link.show();
 * const links = await link.show({});
 * ```
 */
function show(options = {}, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'link', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.LinkShow, show_schema_1.LinkShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
/**
 * Change device attributes.
 *
 * Warning: If multiple parameter changes are requested, `ip` aborts immediately after any
 * of the changes have failed.
 *
 * This is the only case when `ip` can move the system to an
 * unpredictable state. The solution is to avoid changing several parameters with one `ip link set` call.
 * The modifier `change` is equivalent to `set`.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function set(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'link', 'set'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.LinkSet, set_schema_1.LinkSetSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.set = set;
exports.default = {
    add,
    del,
    show,
    set,
    change: set
};
//# sourceMappingURL=link.js.map