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
const child_process_1 = require("child_process");
const events_1 = require("events");
const command_1 = __importDefault(require("./command"));
const monitor_constants_1 = require("../../commands/monitor.constants");
/**
 * Class to group common behavior among monitor commands.
 *
 * @category Classes
 * @internal
 */
class MonitorCommand extends command_1.default {
    static parseLineOutput(eventLine) {
        const bracketsSectionRegex = /^\[.*?\](?: (\[.*?\])*)?/;
        const textsInsideBracketsRegex = /\[([^\]]+)\]/g;
        const bracketsSectionMatch = eventLine.match(bracketsSectionRegex);
        const bracketsSection = (bracketsSectionMatch)
            ? bracketsSectionMatch[0]
            : '';
        const dataLines = eventLine
            .split(/\\\s+/g)
            .map((line) => line.trim());
        const bracketMatches = dataLines[0].match(textsInsideBracketsRegex);
        const brackets = (bracketMatches)
            ? bracketMatches.map(b => b.slice(1, -1))
            : [];
        // Extracting the rest of the line that isn't wrapped in [].
        const firstLineRest = dataLines[0].replace(textsInsideBracketsRegex, '').trim();
        return {
            timestamp: brackets[0],
            nsid: brackets[1].split(' ')[1],
            object: (brackets[2] === 'ADDR')
                ? monitor_constants_1.MonitorObjects.Address
                : brackets[2].toLowerCase(),
            originalLine: eventLine,
            lines: [
                bracketsSection,
                firstLineRest,
                ...dataLines.slice(1)
            ]
        };
    }
    constructor(schemaId, schema, options, globalOptions, ipCmd) {
        super(schemaId, schema, Object.assign(Object.assign({}, options), { 
            // Override options to maximize output.
            label: true, 'all-nsid': true }), globalOptions, ipCmd);
        this.schemaId = schemaId;
        this.schema = schema;
        this.options = options;
        this.globalOptions = globalOptions;
        this.ipCmd = ipCmd;
        this.emitter = new events_1.EventEmitter();
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.globalOptions.dryRun) {
                return this;
            }
            let [command, ...args] = this._cmdToExec.trim().split(' ');
            this.spawnedProcess = (0, child_process_1.spawn)(command, args);
            this.spawnedProcess.stdout.setEncoding('utf8');
            this.spawnedProcess.stdout.on('data', (data) => {
                const output = data.split('\n');
                for (let lineNumber = 0, outputLength = output.length - 1; lineNumber < outputLength; lineNumber++) {
                    let toEmit = MonitorCommand.parseLineOutput(output[lineNumber]);
                    this.emitter.emit(monitor_constants_1.MonitorObjects.All, toEmit);
                    if (this.options.object_ !== monitor_constants_1.MonitorObjects.All) {
                        this.emitter.emit(this.options.object_, toEmit);
                    }
                }
            });
            this.spawnedProcess.stderr.setEncoding('utf8');
            this.spawnedProcess.stderr.on('data', (data) => {
                this.emitter.emit('error', data);
                this.close();
            });
            return this;
        });
    }
    /** Listens to the events triggered by the monitor. */
    on(event, cb) {
        this.emitter.on.call(this.emitter, event, cb);
        return this;
    }
    /** Closes the monitor. */
    close() {
        if (this.spawnedProcess) {
            this.spawnedProcess.removeAllListeners();
            this.spawnedProcess.kill('SIGKILL');
        }
        this.emitter.removeAllListeners();
    }
}
exports.default = MonitorCommand;
//# sourceMappingURL=monitor-command.js.map