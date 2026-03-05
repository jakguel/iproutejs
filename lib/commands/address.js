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
exports.show = exports.showdump = exports.restore = exports.save = exports.flush = exports.del = exports.replace = exports.change = exports.add = void 0;
const command_with_redirect_from_filepath_1 = __importDefault(require("../common/classes/command-with-redirect-from-filepath"));
const command_with_redirect_to_filepath_1 = __importDefault(require("../common/classes/command-with-redirect-to-filepath"));
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const add_schema_1 = require("./address/add.schema");
const delete_schema_1 = require("./address/delete.schema");
const flush_schema_1 = require("./address/flush.schema");
const show_schema_1 = require("./address/show.schema");
const command_with_redirect_from_filepath_and_returned_data_1 = __importDefault(require("../common/classes/command-with-redirect-from-filepath-and-returned-data"));
/**
 * Add new protocol address.
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
 * import { address } from 'iproute';
 * ```
 *
 * Add a new address
 * ```
 * await address.add({
 *   local:  '10.3.15.3/24',
 *   scope:  AddressScopes.Host,
 *   dev:	 'eth0'
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddressAdd, add_schema_1.AddressAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Change protocol address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function change(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'change'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddressAdd, add_schema_1.AddressAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.change = change;
/**
 * Replace protocol address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function replace(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'replace'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddressAdd, add_schema_1.AddressAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.replace = replace;
/**
 * Delete an address.
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
 * import { address } from 'iproute';
 * ```
 *
 * Delete an address
 * ```
 * await address.del({
 *   local: '10.3.15.3/24'
 *   dev:	 'eth0'
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'delete'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddressDelete, delete_schema_1.AddressDeleteSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Flush protocol addresses.
 *
 * This command flushes the protocol addresses selected by some criteria.
 *
 * This command has the same arguments as show except that type and master selectors are not supported.
 * Another difference is that it does not run when no arguments are given.
 *
 * Warning: This command and other flush commands are unforgiving.
 * They will cruelly purge all the addresses.
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
 * import { address } from 'iproute';
 * ```
 *
 * Flush `eth0` addresses
 * ```
 * await address.flush({
 *   dev: 'eth0'
 * });
 * ```
 */
function flush(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'flush'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddressFlush, flush_schema_1.AddressFlushSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.flush = flush;
/**
 * Save address configuration into a file.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function save(options, globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'save'];
        const ipCmd = new command_with_redirect_to_filepath_1.default(schemas_1.SchemaIds.AddressFlush, flush_schema_1.AddressFlushSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.save = save;
/**
 * Restore address configuration from a file previously generated by {@link save}.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function restore(globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'restore'];
        const ipCmd = new command_with_redirect_from_filepath_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.restore = restore;
/**
 * Show address configuration from a file previously generated by {@link save}.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
function showdump(globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'showdump'];
        const ipCmd = new command_with_redirect_from_filepath_and_returned_data_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.showdump = showdump;
/**
 * Look at protocol addresses.
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
 * import { address } from 'iproute';
 * ```
 *
 * Show only `eth0` device addresses
 * ```
 * const addresses = await address.show({
 *   dev: 'eth0'
 * });
 * ```
 *
 * Show all addresses
 * ```
 * const addresses = await address.show();
 * const addresses = await address.show({});
 * ```
 */
function show(options = {}, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'address', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.AddressShow, show_schema_1.AddressShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
exports.default = {
    add,
    change,
    replace,
    del,
    flush,
    save,
    restore,
    showdump,
    show
};
//# sourceMappingURL=address.js.map