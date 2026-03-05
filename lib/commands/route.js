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
exports.replace = exports.append = exports.change = exports.del = exports.add = exports.get = exports.restore = exports.save = exports.flush = exports.show = void 0;
const command_with_redirect_from_filepath_1 = __importDefault(require("../common/classes/command-with-redirect-from-filepath"));
const command_with_redirect_to_filepath_1 = __importDefault(require("../common/classes/command-with-redirect-to-filepath"));
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const get_schema_1 = require("./route/get.schema");
const show_schema_1 = require("./route/show.schema");
const add_schema_1 = require("./route/add.schema");
/**
 * List routes.
 * The command displays the contents of the routing tables or the route(s) selected by some criteria.
 *
 * Warning: Changes to the RPDB made with these commands do not become active immediately.
 * It is assumed that after a script finishes a batch of updates, it flushes the routing cache with
 * `ip route flush cache`.
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
 * import { route } from 'iproute';
 * ```
 *
 * Show routes from all tables
 * ```
 * const routes = await route.show({
 *   table: RouteRoutingTables.All
 * });
 * ```
 */
function show(options = {}, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.RouteShow, show_schema_1.RouteShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
/**
 * Flush routing tables this command flushes routes selected by some criteria.
 *
 * The arguments have the same syntax and semantics as the arguments of `ip route show`, but routing tables are
 * not listed but purged.
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
 * import { route } from 'iproute';
 * ```
 *
 * Flush the table cache
 * ```
 * await route.flush({
 *   table: RouteRoutingTables.Cache
 * });
 * ```
 */
function flush(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'flush'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteShow, show_schema_1.RouteShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.flush = flush;
/**
 * Save routing table information.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function save(options = {}, globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'save'];
        const ipCmd = new command_with_redirect_to_filepath_1.default(schemas_1.SchemaIds.RouteShow, show_schema_1.RouteShowSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.save = save;
/**
 * Restore routing table information from a file previously generated by {@link save}.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function restore(globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'restore'];
        const ipCmd = new command_with_redirect_from_filepath_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.restore = restore;
/**
 * Get a single route.
 *
 * This command gets a single route to a destination and prints its contents exactly as the  kernel sees it.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function get(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'get'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.RouteShow, get_schema_1.RouteGetSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.get = get;
/**
 * Add new route.
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
 * import { route } from 'iproute';
 * ```
 *
 * Unicast type route (the default if not specified)
 * ```
 * await route.add({
 *   to:	'10.0.0.0/24',
 *   via:	{
 *     address: '192.168.56.1'
 *   }
 * });
 * ```
 *
 * Multipath route with load balance between devices
 * ```
 * await route.add({
 *   to:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *   }]
 * });
 * ```
 *
 * A NAT route
 * ```
 * await route.add({
 *   type:	RoutingTableTypes.Nat,
 *   to:	    '10.0.0.0/24',
 *   table:	300,
 *   via:	{
 *     address: '192.168.56.1'
 *   }
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteAdd, add_schema_1.RouteAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Delete route.
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
 * import { route } from 'iproute';
 * ```
 *
 * Delete multipath route with load balance between devices
 * ```
 * await route.del({
 *   to:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *  }]
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'delete'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteAdd, add_schema_1.RouteAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Change route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function change(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'change'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteAdd, add_schema_1.RouteAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.change = change;
/**
 * Append route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function append(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'append'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteAdd, add_schema_1.RouteAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.append = append;
/**
 * Change or add new one.
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
 * import { route } from 'iproute';
 * ```
 *
 * Unicast type route (the default if not specified)
 * ```
 * await route.add({
 *   to:	'10.0.0.0/24',
 *   via:	{
 *     address: '192.168.56.1'
 *   }
 * });
 * ```
 *
 * Multipath route with load balance between devices
 * ```
 * await route.add({
 *   to:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *   }]
 * });
 * ```
 *
 * A NAT route
 * ```
 * await route.add({
 *   type:	RoutingTableTypes.Nat,
 *   to:	    '10.0.0.0/24',
 *   table:	300,
 *   via:	{
 *     address: '192.168.56.1'
 *   }
 * });
 * ```
 */
function replace(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'route', 'replace'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.RouteAdd, add_schema_1.RouteAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.replace = replace;
exports.default = {
    show,
    flush,
    save,
    restore,
    get,
    add,
    del,
    change,
    append,
    replace
};
//# sourceMappingURL=route.js.map