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
exports.show = void 0;
const command_with_returned_data_1 = __importDefault(require("../common/classes/command-with-returned-data"));
const schemas_1 = require("../common/constants/schemas");
const show_schema_1 = require("./mroute/show.schema");
/**
 * List multicast routing cache entries.
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
 * import { mroute } from 'iproute';
 * ```
 *
 * Show multicast routes
 * ```
 * const entries = await mroute.show({});
 * ```
 */
function show(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'mroute', 'show'];
        const ipCmd = new command_with_returned_data_1.default(schemas_1.SchemaIds.MrouteShow, show_schema_1.MrouteShowSchema, options, Object.assign(Object.assign({}, globalOptions), { 
            // Overrides for a better show.
            '-details': true, '-statistics': true, '-json': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.show = show;
exports.default = {
    show
};
//# sourceMappingURL=mroute.js.map