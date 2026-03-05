import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { NtableInfo, NtableShowOptions } from './ntable/show.interfaces';
import { NtableChangeOptions } from './ntable/change.interfaces';
/**
 * Modify table parameter.
 * Allows modifying table parameters such as timers and queue lengths.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export declare function change(options: NtableChangeOptions, globalOptions?: GlobalOptions): Promise<Command<NtableChangeOptions>>;
/**
 * List the ip neighbour tables.
 * This commands displays neighbour table parameters and statistics.
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
 * import { ntable } from 'iproute';
 * ```
 *
 * Show all neighbour tables
 * ```
 * const entries = await ntable.show({});
 * ```
 */
export declare function show(options?: NtableShowOptions, globalOptions?: GlobalOptions): Promise<Command<NtableShowOptions> | NtableInfo[]>;
declare const _default: {
    change: typeof change;
    show: typeof show;
};
export default _default;
