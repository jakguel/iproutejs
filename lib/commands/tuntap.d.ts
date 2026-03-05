import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { TunTapTunnelAddOptions } from './tuntap/add.interfaces';
import { TunTapTunnelInfo } from './tuntap/show.interfaces';
import { TunTapTunnelShowOptions } from './tuntap/show.interfaces';
/**
 * Add a new tunnel.
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
 * import { tuntap } from 'iproute';
 * ```
 *
 * Create a new tuntap device
 * ```
 * await tuntap.add({
 *   mode: TunTapTunnelModes.Tun
 * });
 * ```
 */
export declare function add(options: TunTapTunnelAddOptions, globalOptions?: GlobalOptions): Promise<Command<TunTapTunnelAddOptions>>;
/**
 * Destroy a tunnel.
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
 * import { tuntap } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await tuntap.del({
 *   mode: TunTapTunnelModes.Tun
 * });
 * ```
 */
export declare function del(options: TunTapTunnelAddOptions, globalOptions?: GlobalOptions): Promise<Command<TunTapTunnelAddOptions>>;
/**
 * List tunnels.
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
 * import { tuntap } from 'iproute';
 * ```
 *
 * Show tuntap devices
 * ```
 * const entries = await tuntap.show({});
 * ```
 */
export declare function show(options?: TunTapTunnelShowOptions, globalOptions?: GlobalOptions): Promise<Command<TunTapTunnelShowOptions> | TunTapTunnelInfo[]>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    show: typeof show;
    list: typeof show;
    lst: typeof show;
};
export default _default;
