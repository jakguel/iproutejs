import { GlobalOptions } from '../common/interfaces/common';
import { RoutingTable, RoutingTableOptions } from './routing-tables.interfaces';
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
export declare function show(options?: RoutingTableOptions, globalOptions?: GlobalOptions): Promise<RoutingTable[]>;
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
export declare function add(options: RoutingTableOptions | RoutingTableOptions[], globalOptions?: GlobalOptions): Promise<void>;
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
export declare function del(options: RoutingTableOptions | RoutingTableOptions[], globalOptions?: GlobalOptions): Promise<void>;
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
export declare function clear(globalOptions?: GlobalOptions): Promise<void>;
declare const _default: {
    show: typeof show;
    add: typeof add;
    del: typeof del;
    clear: typeof clear;
};
export default _default;
