import { GlobalOptions } from '../common/interfaces/common';
/**
 * Enables and checks status of IPv4 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v4.enable();
 * await utils.ipForwarding.v4.disable();
 *
 * const status = await utils.ipForwarding.v4.status();
 * ```
 */
export declare const v4: {
    enable: (globalOptions?: GlobalOptions) => Promise<string | null>;
    disable: (globalOptions?: GlobalOptions) => Promise<string | null>;
    status: (globalOptions?: GlobalOptions) => Promise<string | null>;
};
/**
 * Enables and checks status of IPv6 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v6.enable();
 * await utils.ipForwarding.v6.disable();
 *
 * const status = await utils.ipForwarding.v6.status();
 * ```
 */
export declare const v6: {
    enable: (globalOptions?: GlobalOptions) => Promise<string | null>;
    disable: (globalOptions?: GlobalOptions) => Promise<string | null>;
    status: (globalOptions?: GlobalOptions) => Promise<string | null>;
};
/**
 * Enables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.enable();
 * ```
 */
export declare const enable: (globalOptions?: GlobalOptions) => Promise<void>;
/**
 * Disables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.disable();
 * ```
 */
export declare const disable: (globalOptions?: GlobalOptions) => Promise<void>;
/**
 * Checks both IPv4 & IPv6 IP forwarding statuses.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * const status = await utils.ipForwarding.status();
 * ```
 */
export declare const status: (globalOptions?: GlobalOptions) => Promise<{
    v4: string;
    v6: string;
}>;
declare const _default: {
    v4: {
        enable: (globalOptions?: GlobalOptions) => Promise<string | null>;
        disable: (globalOptions?: GlobalOptions) => Promise<string | null>;
        status: (globalOptions?: GlobalOptions) => Promise<string | null>;
    };
    v6: {
        enable: (globalOptions?: GlobalOptions) => Promise<string | null>;
        disable: (globalOptions?: GlobalOptions) => Promise<string | null>;
        status: (globalOptions?: GlobalOptions) => Promise<string | null>;
    };
    enable: (globalOptions?: GlobalOptions) => Promise<void>;
    disable: (globalOptions?: GlobalOptions) => Promise<void>;
    status: (globalOptions?: GlobalOptions) => Promise<{
        v4: string;
        v6: string;
    }>;
};
export default _default;
