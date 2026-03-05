import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { MaddressAddOptions } from './maddress/add.interfaces';
import { MaddressInfo, MaddressShowOptions } from './maddress/show.interfaces';
/**
 * Add a multicast address.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Add a multicast address
 * ```
 * await maddress.add({
 *   address: '33:33:00:00:00:01',
 *   dev: 'enp0s3'
 * });
 * ```
 */
export declare function add(options: MaddressAddOptions, globalOptions?: GlobalOptions): Promise<Command<MaddressAddOptions>>;
/**
 * Delete a multicast address.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await maddress.del({
 *   address: '33:33:00:00:00:01',
 *   dev: 'enp0s3'
 * });
 * ```
 */
export declare function del(options: MaddressAddOptions, globalOptions?: GlobalOptions): Promise<Command<MaddressAddOptions>>;
/**
 * List multicast addresses.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Show multicast addresses
 * ```
 * const entries = await maddress.show({});
 * ```
 */
export declare function show(options: MaddressShowOptions, globalOptions?: GlobalOptions): Promise<Command<MaddressShowOptions> | MaddressInfo[]>;
declare const _default: {
    add: typeof add;
    del: typeof del;
    show: typeof show;
};
export default _default;
