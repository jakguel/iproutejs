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
exports.clear = exports.del = exports.add = exports.show = void 0;
const fs_1 = require("fs");
const lodash_isplainobject_1 = __importDefault(require("lodash.isplainobject"));
const routing_tables_constants_1 = require("./routing-tables.constants");
const misc_1 = require("../common/misc");
const schemas_1 = require("../common/constants/schemas");
const routing_tables_schemas_1 = require("./routing-tables.schemas");
function parseTables(rawData) {
    if (!rawData) {
        return [];
    }
    const tables = [];
    const output = rawData
        .split('\n')
        .filter(line => line && line.charAt(0) !== '#');
    for (const line of output) {
        const fields = line.trim().split(/\s+/);
        const table = {
            id: Number(fields[0]),
            name: fields[1]
        };
        tables.push(table);
    }
    return tables;
}
/**
 * List routing tables.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * Import module
 * ```
 * import { utils } from 'iproute';
 * ```
 *
 * Show all tables
 * ```
 * const tables = await utils.routingTables.show();
 * ```
 *
 * Show table with `id` 255
 * ```
 * const tables = await utils.routingTables.show({
 *   id: 255
 * });
 * ```
 *
 * Show table with `name` `local`
 * ```
 * const tables = await show({
 *   name: RoutingTables.Local
 * });
 * ```
 */
function show(options = {}, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, misc_1.validate)(schemas_1.SchemaIds.RoutingTablesOptions, routing_tables_schemas_1.RoutingTableOptionsSchema, options);
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        const fileContent = yield fs_1.promises.readFile(routing_tables_constants_1.tablesPath, { encoding: 'utf8' });
        let tables = parseTables(fileContent);
        // Filter tables if options were given.
        if (options.id) {
            tables = tables.filter(item => item.id === options.id);
        }
        if (options.name) {
            tables = tables.filter(item => item.name === options.name);
        }
        return tables;
    });
}
exports.show = show;
/**
 * Add a routing table.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * Import module
 * ```
 * import { utils } from 'iproute';
 * ```
 *
 * Add a single table
 * ```
 * await utils.routingTables.add({
 *   id: 50,
 *   name: 'table_name'
 * });
 * ```
 *
 * Add more than one table
 * ```
 * await utils.routingTables.add([{
 *   id: 50,
 *   name: 'table_name'
 * }, {
 *   id: 51,
 *   name: 'table_name2'
 * }]);
 * ```
 */
function add(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let tablesToAdd = [];
        if ((0, lodash_isplainobject_1.default)(options)) {
            tablesToAdd.push(options);
        }
        else {
            tablesToAdd = options;
        }
        for (let newTable of tablesToAdd) {
            (0, misc_1.validate)(schemas_1.SchemaIds.RoutingTablesOptions, routing_tables_schemas_1.RoutingTableOptionsSchema, newTable);
        }
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        const tables = yield show();
        let toAppend = '';
        for (let newTable of tablesToAdd) {
            const existingTable = tables.find(table => table.id === newTable.id || table.name === newTable.name);
            if (existingTable) {
                // The table is already there, so exit silently.
                continue;
            }
            toAppend += `${newTable.id}\t${newTable.name}\n`;
        }
        yield fs_1.promises.appendFile(routing_tables_constants_1.tablesPath, toAppend);
    });
}
exports.add = add;
/**
 * Delete a routing table.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * Import module
 * ```
 * import { utils } from 'iproute';
 * ```
 *
 * It will remove the specified table if it exists
 * ```
 * await utils.routingTables.delete({
 *   id: 50
 * });
 * ```
 *
 * Delete more than one table
 * ```
 * await utils.routingTables.delete([{
 *   id: 51
 * }, {
 *   id: 52
 * }]);
 * ```
 */
function del(options, globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let tablesToDelete = [];
        if ((0, lodash_isplainobject_1.default)(options)) {
            tablesToDelete.push(options);
        }
        else {
            tablesToDelete = options;
        }
        for (let tableToDelete of tablesToDelete) {
            (0, misc_1.validate)(schemas_1.SchemaIds.RoutingTablesOptions, routing_tables_schemas_1.RoutingTableOptionsSchema, tableToDelete);
        }
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        const oldTables = yield show();
        const newTables = oldTables.filter(oldTable => {
            let foundIndex = tablesToDelete.findIndex((tableToDelete) => {
                return tableToDelete.id === oldTable.id || tableToDelete.name === oldTable.name;
            });
            return foundIndex === -1;
        });
        const toWrite = newTables.map(table => `${table.id}\t${table.name}`).join('\n') + '\n';
        yield fs_1.promises.writeFile(routing_tables_constants_1.tablesPath, toWrite);
    });
}
exports.del = del;
/**
 * Delete all routing tables.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * Import module
 * ```
 * import { utils } from 'iproute';
 * ```
 *
 * Clear all tables
 * ```
 * await utils.routingTables.clear();
 * ```
 *
 * Flush route cache so the changes become active
 * ```
 * import { route } from 'iproute';
 *
 * await utils.routingTables.clear();
 *
 * await route.flush({
 *   table: RouteRoutingTables.Cache
 * });
 * ```
 */
function clear(globalOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, misc_1.validate)(schemas_1.SchemaIds.GlobalOptions, schemas_1.GlobalOptionsSchema, globalOptions);
        yield fs_1.promises.writeFile(routing_tables_constants_1.tablesPath, '');
    });
}
exports.clear = clear;
exports.default = {
    show,
    add,
    del,
    clear
};
//# sourceMappingURL=routing-tables.js.map