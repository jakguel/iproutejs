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
const exec_command_1 = require("../exec-command");
const command_1 = require("../errors/command");
const command_2 = __importDefault(require("./command"));
const parse_output_1 = require("../parse-output");
class CommandWithReturnedData extends command_2.default {
    constructor(schemaId, schema, options, globalOptions, ipCmd) {
        super(schemaId, schema, options, globalOptions, ipCmd);
        this.schemaId = schemaId;
        this.schema = schema;
        this.options = options;
        this.globalOptions = globalOptions;
        this.ipCmd = ipCmd;
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.globalOptions.dryRun) {
                return this;
            }
            const { stderr, stdout } = yield (0, exec_command_1.execCommand)(this._cmdToExec);
            if (!stderr) {
                return (0, parse_output_1.parseCommandOutput)(stdout);
            }
            const message = stderr.replace(/\n/g, '');
            throw new command_1.CommandError(message, this._cmdToExec);
        });
    }
}
exports.default = CommandWithReturnedData;
//# sourceMappingURL=command-with-returned-data.js.map