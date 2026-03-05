import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { LinkAddOptions } from './link/add.interfaces';
import { LinkDeleteOptions } from './link/delete.interfaces';
import { LinkSetOptions } from './link/set.interfaces';
import { LinkShowOptions, LinkInfo } from './link/show.interfaces';
/**
 * Adds a virtual link.
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
 * import { link } from 'iproute';
 * ```
 *
 * Add a link
 * ```
 * await link.add({
 *   link:    'lo',
 *   name:    'dummy100',
 *   address: '00:11:22:33:44:55',
 *   mtu:     1500,
 *   type:    VirtualLinkTypes.Dummy
 * });
 * ```
 */
export declare function add(options: LinkAddOptions, globalOptions?: GlobalOptions): Promise<Command<LinkAddOptions>>;
/**
 * Deletes a virtual link.
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
 * import { link } from 'iproute';
 * ```
 *
 * Delete a link
 * ```
 * await link.del({
 *   dev: 'eth0.1@eth0'
 * });
 * ```
 */
export declare function del(options: LinkDeleteOptions, globalOptions?: GlobalOptions): Promise<Command<LinkDeleteOptions>>;
/**
 * Display device attributes.
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
 * import { link } from 'iproute';
 * ```
 *
 * Show link information about the `eth0` device
 * ```
 * const links = await link.show({
 *   dev: 'eth0'
 * });
 * ```
 *
 * Shortcut to show all links
 * ```
 * const links = await link.show();
 * const links = await link.show({});
 * ```
 */
export declare function show(options?: LinkShowOptions, globalOptions?: GlobalOptions): Promise<Command<LinkShowOptions> | LinkInfo[]>;
/**
 * Change device attributes.
 *
 * Warning: If multiple parameter changes are requested, `ip` aborts immediately after any
 * of the changes have failed.
 *
 * This is the only case when `ip` can move the system to an
 * unpredictable state. The solution is to avoid changing several parameters with one `ip link set` call.
 * The modifier `change` is equivalent to `set`.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export declare function set(options: LinkSetOptions, globalOptions?: GlobalOptions): Promise<Command<LinkSetOptions>>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    show: typeof show;
    set: typeof set;
    change: typeof set;
};
export default _default;
