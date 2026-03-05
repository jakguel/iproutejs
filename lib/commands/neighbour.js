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
exports.get = exports.show = exports.flush = exports.replace = exports.change = exports.del = exports.add = void 0;
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const add_schema_1 = require("./neighbour/add.schema");
const del_schema_1 = require("./neighbour/del.schema");
const show_schema_1 = require("./neighbour/show.schema");
const get_schema_1 = require("./neighbour/get.schema");
/**
 * Add a new neighbour entry.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Add a simple ARP entry
 * ```
 * await neighbour.add({
 *   to    : '192.168.1.100',
 *   lladdr: '00:aa:bb:cc:dd:ee',
 *   dev   : 'eth0'
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.NeighbourAdd, add_schema_1.NeighbourAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Delete a neighbour entry.
 *
 * @remarks
 * Warning: Attempts to delete or manually change a {@link NudStates.Noarp} entry created by the kernel
 * may result in unpredictable behaviour.
 *
 * Particularly, the kernel may try to resolve this address even on a NOARP interface
 * or if the address is multicast or broadcast.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Delete an ARP entry
 * ```
 * await neighbour.del({
 *   to : '192.168.1.100',
 *   dev: 'eth0'
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'del'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.NeighbourDel, del_schema_1.NeighbourDelSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Change an existing entry.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function change(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'change'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.NeighbourAdd, add_schema_1.NeighbourAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.change = change;
/**
 * Add a new entry or change an existing one.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function replace(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'replace'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.NeighbourAdd, add_schema_1.NeighbourAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.replace = replace;
/**
 * Flush neighbour entries.
 *
 * @remarks
 * The differences are that it does not run when no arguments are given, and that the
 * default neighbour states to be flushed do not include {@link NudStates.Permanent} and {@link NudStates.Noarp}.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Flush neighbour entries from dev `eth0`
 * ```
 * await neighbour.flush({
 *   dev: 'eth0'
 * });
 * ```
 */
function flush(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'flush'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.NeighbourShow, show_schema_1.NeighbourShowSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.flush = flush;
/**
 * List neighbour entries.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Show all neighbour entries
 * ```
 * const entries = await neighbour.show({});
 * ```
 */
function show(options = {}, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.NeighbourShow, show_schema_1.NeighbourShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
/**
 * Lookup a neighbour entry to a destination given a device.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Performs a neighbour lookup in the kernel and returns a neighbour entry.
 * ```
 * const entries = await neighbour.get({
 *   to:  '10.0.1.10',
 *   dev: 'eth0'
 * });
 * ```
 */
function get(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'neighbour', 'get'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.NeighbourGet, get_schema_1.NeighbourGetSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.get = get;
exports.default = {
    add,
    del,
    change,
    replace,
    flush,
    show,
    get
};
//# sourceMappingURL=neighbour.js.map