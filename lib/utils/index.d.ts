import * as ipForwardingModule from './ip-forwarding';
import * as routingTablesModule from './routing-tables';
/** Manipulates IP forwarding. */
export { ipForwardingModule as ipForwarding };
/** Manipulates routing tables. */
export { routingTablesModule as routingTables };
declare const _default: {
    ipForwarding: {
        v4: {
            enable: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
            disable: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
            status: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
        };
        v6: {
            enable: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
            disable: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
            status: (globalOptions?: import("..").GlobalOptions) => Promise<string | null>;
        };
        enable: (globalOptions?: import("..").GlobalOptions) => Promise<void>;
        disable: (globalOptions?: import("..").GlobalOptions) => Promise<void>;
        status: (globalOptions?: import("..").GlobalOptions) => Promise<{
            v4: string;
            v6: string;
        }>;
    };
    routingTables: {
        show: typeof routingTablesModule.show;
        add: typeof routingTablesModule.add;
        del: typeof routingTablesModule.del;
        clear: typeof routingTablesModule.clear;
    };
};
export default _default;
