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
exports.monitor = void 0;
const monitor_command_1 = __importDefault(require("../common/classes/monitor-command"));
const schemas_1 = require("../common/constants/schemas");
const monitor_schema_1 = require("./monitor/monitor.schema");
/**
 * State monitoring.
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
 * import { monitor } from 'iproute';
 * ```
 *
 * Monitor all objects state changes
 * ```
 * monitor({
 *   object: MonitorObjects.All
 * });
 * ```
 *
 * After starting the monitor, you can start watching for changes
 * ```
 * let command: MonitorCommand<MonitorOptions>;
 *
 * monitor({
 *   object: MonitorObjects.All
 * })
 * .then((_command) => {
 *   command = _command;
 *
 *   command.on(MonitorObjects.All, (data: MonitorEmittedData) => {
 *     // Do something with `data`.
 *   });
 *
 *   command.on('error', (error) => {
 *     // Do something with `data`.
 *   });
 * });
 *
 * setTimeout(() => {
 *   command.close();
 * }, 5000);
 * ```
 */
function monitor(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = ['ip', 'monitor'];
        const ipCmd = new monitor_command_1.default(schemas_1.SchemaIds.Monitor, monitor_schema_1.MonitorSchema, options, Object.assign(Object.assign({}, globalOptions), { '-tshort': true, '-oneline': true }), cmd);
        return yield ipCmd.exec();
    });
}
exports.monitor = monitor;
exports.default = monitor;
//# sourceMappingURL=monitor.js.map