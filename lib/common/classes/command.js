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
const lodash_isplainobject_1 = __importDefault(require("lodash.isplainobject"));
const util_1 = require("util");
const child_process_1 = require("child_process");
const schemas_1 = require("../constants/schemas");
const command_1 = require("../errors/command");
const misc_1 = require("../misc");
const promisifiedExec = (0, util_1.promisify)(child_process_1.exec);
/**
 * Class to group common behavior among commands.
 *
 * @category Classes
 * @internal
 */
class Command {
    // Useful for testing.
    get cmd() {
        return this._cmd;
    }
    // Useful for testing.
    get cmdToExec() {
        return this._cmdToExec;
    }
    constructor(schemaId, schema, options, globalOptions, ipCmd) {
        this.schemaId = schemaId;
        this.schema = schema;
        this.options = options;
        this.globalOptions = globalOptions;
        this.ipCmd = ipCmd;
        this._cmd = [];
        this._cmdToExec = '';
        (0, misc_1.validate)(schemaId, schema, options);
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        this.buildCmd();
    }
    buildCmd() {
        const hasSudo = (this.globalOptions.sudo)
            ? 'sudo'
            : '';
        let cmd = [hasSudo, ...this.ipCmd];
        // Add specific `ip` options to cmd.
        let ipOptions = [];
        Object
            .keys(this.globalOptions)
            .forEach((key) => {
            if (key.search(/^-/) === -1) {
                return;
            }
            ipOptions.push(...this.getCmdFromOptions(this.globalOptions[key], key, false));
        });
        cmd.splice(2, 0, ...ipOptions);
        // Add regular arguments to cmd.
        cmd.push(...this.getCmdFromOptions(this.options, '', true, this.schema));
        this._cmd = cmd;
        this._cmdToExec = cmd.join(' ');
    }
    getCmdFromOptions(value, key = '', orderKeysBySchema = true, schema) {
        let cmd = [];
        let isVisibleKey = !(schema === null || schema === void 0 ? void 0 : schema.keyless);
        if (typeof value === 'string' || typeof value === 'number') {
            if (isVisibleKey && key) {
                cmd.push(key);
            }
            cmd.push(value);
            return cmd;
        }
        if (typeof value === 'boolean') {
            if (!isVisibleKey) {
                // It doesn't make sense.
                // TODO: Throw an error or skip? Skip for now.
                return cmd;
            }
            if (value && key) {
                cmd.push(key);
                return cmd;
            }
            // Is `false`.
            let invertedKey = (/^no/.test(key))
                ? key.replace(/^no/, '')
                : `no${key}`;
            cmd.push(invertedKey);
            return cmd;
        }
        if (Array.isArray(value)) {
            if (isVisibleKey && key) {
                cmd.push(key);
            }
            value.forEach((nestedValue) => {
                if ((0, lodash_isplainobject_1.default)(nestedValue) && (schema === null || schema === void 0 ? void 0 : schema.items)) {
                    cmd.push(...this.getCmdFromOptions(nestedValue, '', orderKeysBySchema, schema === null || schema === void 0 ? void 0 : schema.items));
                    return;
                }
                cmd.push(...this.getCmdFromOptions(nestedValue));
            });
            return cmd;
        }
        if ((0, lodash_isplainobject_1.default)(value)) {
            if (isVisibleKey && key) {
                cmd.push(key);
            }
            let sourceForKeysOrdering = (orderKeysBySchema && schema)
                ? schema.properties
                : value;
            Object
                .keys(sourceForKeysOrdering)
                .forEach((schemaKey) => {
                if (value.hasOwnProperty(schemaKey)) {
                    cmd.push(...this.getCmdFromOptions(value[schemaKey], schemaKey, orderKeysBySchema, schema === null || schema === void 0 ? void 0 : schema.properties[schemaKey]));
                }
            });
            return cmd;
        }
        // TODO: What to do if value is `undefined` or `null`? For now do nothing.
        return cmd;
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.globalOptions.dryRun) {
                return this;
            }
            const { stderr } = yield promisifiedExec(this._cmdToExec);
            if (!stderr) {
                return this;
            }
            const message = stderr.replace(/\n/g, '');
            throw new command_1.CommandError(message, this._cmdToExec);
        });
    }
}
exports.default = Command;
//# sourceMappingURL=command.js.map