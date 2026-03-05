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
exports.fromStdin = exports.fromFile = void 0;
const command_with_filepath_1 = __importDefault(require("../common/classes/command-with-filepath"));
const command_with_stdin_1 = __importDefault(require("../common/classes/command-with-stdin"));
const schemas_1 = require("../common/constants/schemas");
/**
 * Read commands from provided file and invoke them.
 * First failure will cause termination of `ip`.
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
 * import { batch } from 'iproute';
 * ```
 *
 * Executes batch commands from a file
 * ```
 * await batch.fromFile({
 *   filePath: '/tmp/filepath'
 * });
 * ```
 */
function fromFile(globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', '-batch'];
        const ipCmd = new command_with_filepath_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.fromFile = fromFile;
/**
 * Read commands from standard input and invoke them.
 * First failure will cause termination of `ip`.
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
 * import { batch } from 'iproute';
 * ```
 *
 * Executes batch commands from stdin
 * ```
 * await batch.fromStdin({
 *   stdin: [
 *     'address add local 127.0.1.4/32 dev lo',
 *     'address add local 127.0.1.5/32 dev lo',
 *     'address add local 127.0.1.6/32 dev lo',
 *     'address add local 127.0.1.7/32 dev lo'
 *   ].join('\n')
 * });
 * ```
 */
function fromStdin(globalOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', '-batch'];
        const ipCmd = new command_with_stdin_1.default(schemas_1.SchemaIds.Empty, schemas_1.EmptySchema, {}, globalOptions, cmd);
        return yield ipCmd.exec();
    });
}
exports.fromStdin = fromStdin;
exports.default = {
    fromFile,
    fromStdin
};
//# sourceMappingURL=batch.js.map