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
exports.list = exports.flush = exports.del = exports.add = void 0;
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const command_1 = __importDefault(require("../common/classes/command"));
const schemas_1 = require("../common/constants/schemas");
const add_schema_1 = require("./addrlabel/add.schema");
const del_schema_1 = require("./addrlabel/del.schema");
/**
 * Add an address label entry to the kernel.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Add an address label
 * ```
 * await addrlabel.add({
 *   prefix: '2001:db8::/32',
 *   label:   100,
 * });
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'addrlabel', 'add'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddrlabelAdd, add_schema_1.AddrlabelAddSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.add = add;
/**
 * Delete an address label.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Delete an address label
 * ```
 * await addrlabel.del({
 *   prefix: '2001:db8::/32'
 * });
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'addrlabel', 'del'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.AddrlabelDel, del_schema_1.AddrlabelDelSchema, options, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.del = del;
/**
 * Delete all the address labels in the kernel.
 * This does not restore any default settings.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Flush address labels
 * ```
 * await addrlabel.flush();
 * ```
 */
function flush(globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'addrlabel', 'flush'];
        const ipCmd = new command_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.flush = flush;
/**
 * List the current address label entries in the kernel.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Show all address labels
 * ```
 * const labels = await addrlabel.list();
 * ```
 */
function list(globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'addrlabel', 'list'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.list = list;
exports.default = {
    add,
    del,
    flush,
    list
};
//# sourceMappingURL=addrlabel.js.map