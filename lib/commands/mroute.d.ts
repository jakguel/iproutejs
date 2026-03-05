import Command from '../common/classes/command';
import { GlobalOptions } from '../common/interfaces/common';
import { MrouteInfo, MrouteShowOptions } from './mroute/show.interfaces';
/**
 * List multicast routing cache entries.
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
 * import { mroute } from 'iproute';
 * ```
 *
 * Show multicast routes
 * ```
 * const entries = await mroute.show({});
 * ```
 */
export declare function show(options: MrouteShowOptions, globalOptions?: GlobalOptions): Promise<Command<MrouteShowOptions> | MrouteInfo[]>;
declare const _default: {
    show: typeof show;
};
export default _default;
