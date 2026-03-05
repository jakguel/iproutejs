import Command from '../common/classes/command';
import { Empty, GlobalOptions } from '../common/interfaces/common';
import { TunnelAddOptions } from './tunnel/add.interfaces';
import { TunnelInfo } from './tunnel.constants';
import { TunnelPrlOptions } from './tunnel/prl.interfaces';
import { Tunnel6rdOptions } from './tunnel/6rd.interfaces';
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Create a new tunnel
 * ```
 * await tunnel.add({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Gre,
 *   remote: '203.0.113.4',
 *   local : '203.0.113.5',
 *   dev   : 'eth0'
 * });
 * ```
 */
export declare function add(options: TunnelAddOptions, globalOptions?: GlobalOptions): Promise<Command<TunnelAddOptions>>;
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await tunnel.del({
 *   name: 'tun0'
 * });
 * ```
 */
export declare function del(options: TunnelAddOptions, globalOptions?: GlobalOptions): Promise<Command<TunnelAddOptions>>;
/**
 * Change an existing tunnel.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Modify an existing tunnel
 * ```
 * await tunnel.change({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Ipip,
 *   remote: '203.0.113.6',
 *   local : '203.0.113.7',
 *   dev   : 'eth1'
 * });
 * ```
 */
export declare function change(options: TunnelAddOptions, globalOptions?: GlobalOptions): Promise<Command<TunnelAddOptions>>;
/**
 * List tunnels.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Show tunnels
 * ```
 * const entries = await tunnel.show({});
 * ```
 */
export declare function show(globalOptions?: GlobalOptions): Promise<Command<Empty> | TunnelInfo[]>;
/**
 * Potential router list (ISATAP only).
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export declare function prl(options: TunnelPrlOptions, globalOptions?: GlobalOptions): Promise<Command<TunnelPrlOptions>>;
/**
 * Specifies the 6rd (IPv6 Rapid Deployment) tunneling mechanism.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Configures 6rd tunneling mechanism.
 * ```
 * await tunnel.6rd({
 *   dev        : 'eth0',
 *   6rd_prefix : '2001:db8::'
 * });
 * ```
 */
export declare function v6Rd(options: Tunnel6rdOptions, globalOptions?: GlobalOptions): Promise<Command<Tunnel6rdOptions>>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    change: typeof change;
    show: typeof show;
    prl: typeof prl;
    v6Rd: typeof v6Rd;
};
export default _default;
