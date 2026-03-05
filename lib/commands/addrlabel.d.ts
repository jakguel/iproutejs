import Command from '../common/classes/command';
import { Empty, GlobalOptions } from '../common/interfaces/common';
import { AddrlabelAddOptions } from './addrlabel/add.interfaces';
import { AddrlabelInfo } from './addrlabel/list.interfaces';
import { AddrlabelDelOptions } from './addrlabel/del.interfaces';
/**
 * Add an address label entry to the kernel.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Add an address label
 * ```
 * await addrlabel.add({
 *   prefix: '2001:db8::/32',
 *   label:   100,
 * });
 * ```
 */
export declare function add(options: AddrlabelAddOptions, globalOptions?: GlobalOptions): Promise<Command<AddrlabelAddOptions>>;
/**
 * Delete an address label.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Delete an address label
 * ```
 * await addrlabel.del({
 *   prefix: '2001:db8::/32'
 * });
 * ```
 */
export declare function del(options: AddrlabelDelOptions, globalOptions?: GlobalOptions): Promise<Command<AddrlabelDelOptions>>;
/**
 * Delete all the address labels in the kernel.
 * This does not restore any default settings.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Flush address labels
 * ```
 * await addrlabel.flush();
 * ```
 */
export declare function flush(globalOptions?: GlobalOptions): Promise<Command<Empty>>;
/**
 * List the current address label entries in the kernel.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Show all address labels
 * ```
 * const labels = await addrlabel.list();
 * ```
 */
export declare function list(globalOptions?: GlobalOptions): Promise<Command<Empty> | AddrlabelInfo[]>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    flush: typeof flush;
    list: typeof list;
};
export default _default;
