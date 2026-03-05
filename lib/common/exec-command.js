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
Object.defineProperty(exports, "__esModule", { value: true });
exports.execCommand = void 0;
const util_1 = require("util");
const child_process_1 = require("child_process");
const command_1 = require("./errors/command");
const _exec = (0, util_1.promisify)(child_process_1.exec);
/**
 * Promisified `exec` wrapper that converts non-zero exit codes to {@link CommandError}.
 *
 * Node's `promisify(exec)` throws a raw `Error` (with `.stderr` / `.stdout` attached)
 * when the child process exits with a non-zero exit code.  This wrapper catches that
 * error and re-throws it as a typed `CommandError` so callers always deal with one
 * consistent error class — including the derived `code` from {@link CommandErrorCodes}.
 *
 * @internal
 */
function execCommand(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield _exec(cmd);
        }
        catch (err) {
            // promisify(exec) attaches .stderr and .stdout to the thrown Error when
            // the child process exits with a non-zero exit code.
            const stderr = err.stderr || '';
            if (stderr) {
                throw new command_1.CommandError(stderr.replace(/\n/g, ''), cmd);
            }
            // Fallback: command failed without stderr (e.g. binary not found).
            throw new command_1.CommandError((err.message || String(err)).replace(/\n/g, ''), cmd);
        }
    });
}
exports.execCommand = execCommand;
//# sourceMappingURL=exec-command.js.map