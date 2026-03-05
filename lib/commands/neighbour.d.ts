import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { NeighbourAddOptions } from './neighbour/add.interfaces';
import { NeighbourDelOptions } from './neighbour/del.interfaces';
import { NeighbourInfo, NeighbourShowOptions } from './neighbour/show.interfaces';
import { NeighbourGetOptions } from './neighbour/get.interfaces';
/**
 * Add a new neighbour entry.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Add a simple ARP entry
 * ```
 * await neighbour.add({
 *   to    : '192.168.1.100',
 *   lladdr: '00:aa:bb:cc:dd:ee',
 *   dev   : 'eth0'
 * });
 * ```
 */
export declare function add(options: NeighbourAddOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourAddOptions>>;
/**
 * Delete a neighbour entry.
 *
 * @remarks
 * Warning: Attempts to delete or manually change a {@link NudStates.Noarp} entry created by the kernel
 * may result in unpredictable behaviour.
 *
 * Particularly, the kernel may try to resolve this address even on a NOARP interface
 * or if the address is multicast or broadcast.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Delete an ARP entry
 * ```
 * await neighbour.del({
 *   to : '192.168.1.100',
 *   dev: 'eth0'
 * });
 * ```
 */
export declare function del(options: NeighbourDelOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourDelOptions>>;
/**
 * Change an existing entry.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export declare function change(options: NeighbourAddOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourAddOptions>>;
/**
 * Add a new entry or change an existing one.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export declare function replace(options: NeighbourAddOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourAddOptions>>;
/**
 * Flush neighbour entries.
 *
 * @remarks
 * The differences are that it does not run when no arguments are given, and that the
 * default neighbour states to be flushed do not include {@link NudStates.Permanent} and {@link NudStates.Noarp}.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Flush neighbour entries from dev `eth0`
 * ```
 * await neighbour.flush({
 *   dev: 'eth0'
 * });
 * ```
 */
export declare function flush(options: NeighbourShowOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourShowOptions>>;
/**
 * List neighbour entries.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Show all neighbour entries
 * ```
 * const entries = await neighbour.show({});
 * ```
 */
export declare function show(options?: NeighbourShowOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourShowOptions> | NeighbourInfo[]>;
/**
 * Lookup a neighbour entry to a destination given a device.
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
 * import { neighbour } from 'iproute';
 * ```
 *
 * Performs a neighbour lookup in the kernel and returns a neighbour entry.
 * ```
 * const entries = await neighbour.get({
 *   to:  '10.0.1.10',
 *   dev: 'eth0'
 * });
 * ```
 */
export declare function get(options: NeighbourGetOptions, globalOptions?: GlobalOptions): Promise<Command<NeighbourGetOptions> | NeighbourInfo[]>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    change: typeof change;
    replace: typeof replace;
    flush: typeof flush;
    show: typeof show;
    get: typeof get;
};
export default _default;
