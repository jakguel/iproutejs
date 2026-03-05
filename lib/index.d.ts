import * as batchModule from './commands/batch';
import * as linkModule from './commands/link';
import * as addressModule from './commands/address';
import * as routeModule from './commands/route';
import * as ruleModule from './commands/rule';
import * as monitorModule from './commands/monitor';
import * as addrlabelModule from './commands/addrlabel';
import * as neighbourModule from './commands/neighbour';
import * as ntableModule from './commands/ntable';
import * as tunnelModule from './commands/tunnel';
import * as tuntapModule from './commands/tuntap';
import * as maddressModule from './commands/maddress';
import * as mrouteModule from './commands/mroute';
import * as utilsModule from './utils';
import Command from './common/classes/command';
import MonitorCommand from './common/classes/monitor-command';
export { OnOffToggle, EnableDisableToggle, EnableDisableAsStringToggle, EnableDisableAutoToggle } from './common/constants/attribute-values';
export { SchemaIds } from './common/constants/schemas';
export { mac, hex4Digits, ipv4, ipv6, ip, ipWithOptionalMask, ipWithRequiredMask, ipOrAny, ipWithOptionalMaskAndAllAndDefaultValues, ipWithRequiredMaskAndAllAndDefaultValues, ipWithOptionalFamilyPrefix, slashSeparatedStrings, slashSeparatedNumbers, commaSeparatedIpv6Addresses, timeWithUnit, colonSeparatedNumbers } from './common/constants/regexes';
export { GlobalOptions, Empty, FilePathRequiredGlobalOption, StdinRequiredGlobalOption, GlobalOptionsWithRequiredFilePath, GlobalOptionsWithRequiredStdin } from './common/interfaces/common';
export { MonitorEmittedData } from './common/interfaces/monitor';
export { CommandError, CommandErrorCodes } from './common/errors/command';
export { ParametersError } from './common/errors/parameters';
/**
 * Read commands from provided file or standard input and invoke them.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { batch } from 'iproutejs';
 * ```
 */
export { batchModule as batch };
/**
 * Network devices configuration.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-link.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { link } from 'iproutejs';
 * ```
 */
export { linkModule as link };
export { LinkTypes, ExtendedLinkTypes, VlanProtocols, DontFragmentFlagValues, SecondaryUdpEncapsulations, IpipSipDeviceModes, IpoIbModes, ErspanDirections, TtlSpecialValues, MacvlanMacvtapModes, HsrVersions, HsrProtocols, MultiCastRouterOptions, IgmpVersions, MldVersions, MacsecValidationModeOptions, SecureAssociationEncodings, AddrGenMode, BridgeSlavePortStates, XdpOptionTypes } from './commands/link.constants';
export { LinkAddOptions, LinkTypesMappings } from './commands/link/add.interfaces';
export { LinkDeleteOptions } from './commands/link/delete.interfaces';
export { LinkSetCommonOptions, LinkSetGroupOptions, LinkSetDevOptions, LinkSetOptions, XdpOptionTypesMappings } from './commands/link/set.interfaces';
export { LinkShowCommonOptions, LinkShowGroupOptions, LinkShowDevOptions, LinkShowOptions, LinkInfo } from './commands/link/show.interfaces';
export { SetLinkBondSlaveTypeArgs } from './commands/link/extended-virtual-link-types/bond-slave.interfaces';
export { SetLinkBridgeSlaveTypeArgs } from './commands/link/extended-virtual-link-types/bridge-slave.interfaces';
export { AddLinkBareudpTypeArgs } from './commands/link/virtual-link-types/bareup.interfaces';
export { AddLinkBridgeTypeArgs } from './commands/link/virtual-link-types/bridge.interfaces';
export { AddLinkCanTypeArgs } from './commands/link/virtual-link-types/can.interfaces';
export { AddLinkErspanIp6erspanTypeArgs } from './commands/link/virtual-link-types/erspan-ip6erspan.interfaces';
export { AddLinkGeneveTypeArgs } from './commands/link/virtual-link-types/geneve.interfaces';
export { AddLinkGreGretapTypeArgs } from './commands/link/virtual-link-types/gre-gretap.interfaces';
export { AddLinkHsrTypeArgs } from './commands/link/virtual-link-types/hsr.interfaces';
export { AddLinkIp6GreIp6gretapTypeArgs } from './commands/link/virtual-link-types/ip6gre-ip6gretap.interfaces';
export { AddLinkIpipSitTypeArgs } from './commands/link/virtual-link-types/ipip-sit.interfaces';
export { AddLinkIpoibTypeArgs } from './commands/link/virtual-link-types/ipoib.interfaces';
export { AddLinkMacsecTypeArgs } from './commands/link/virtual-link-types/macsec.interfaces';
export { AddLinkMacvlanMacvtapTypeArgs, SetLinkMacvlanMacvtapTypeArgs } from './commands/link/virtual-link-types/macvlan-macvtap.interfaces';
export { AddLinkRmnetTypeArgs } from './commands/link/virtual-link-types/rmnet.interfaces';
export { AddLinkVethVxcanTypeArgs } from './commands/link/virtual-link-types/veth-vxcan.interfaces';
export { AddLinkVlanTypeArgs } from './commands/link/virtual-link-types/vlan.interfaces';
export { AddLinkVrfTypeArgs } from './commands/link/virtual-link-types/vrf.interfaces';
export { AddLinkVxlanTypeArgs } from './commands/link/virtual-link-types/vxlan.interfaces';
export { AddLinkXfrmTypeArgs } from './commands/link/virtual-link-types/xfrm.interfaces';
export { LinkSetXdpObjectOptions } from './commands/link/xdp-options/object.interfaces';
export { LinkSetXdpOffOptions } from './commands/link/xdp-options/off.interfaces';
export { LinkSetXdpPinnedOptions } from './commands/link/xdp-options/pinned.interfaces';
/**
 * Protocol address management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-address.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { address } from 'iproutejs';
 * ```
 */
export { addressModule as address };
export { AddressScopes, AddressFamilies } from './commands/address.constants';
export { AddressAddOptions } from './commands/address/add.interfaces';
export { AddressDeleteOptions } from './commands/address/delete.interfaces';
export { AddressFlushOptions } from './commands/address/flush.interfaces';
export { AddressShowOptions, LinkWithAddressInfo, OnlyAddressInfo, AddressInfo } from './commands/address/show.interfaces';
/**
 * Routing table management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-route.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { route } from 'iproutejs';
 * ```
 */
export { routeModule as route };
export { RoutePreferences, EncapSeg6LocalActions, EncapTypes } from './commands/route.constants';
export { RouteAddOptions, NextHopArgs, EncapTypesMappings, EncapSeg6LocalActionsMappings } from './commands/route/add.interfaces';
export { RouteGetOptions } from './commands/route/get.interfaces';
export { RouteRoutingTables, RoutingTableProtocols, RouteTypes } from './commands/route/show.constants';
export { RouteShowOptions, RouteInfo } from './commands/route/show.interfaces';
export { AddRouteBpfEncapArgs } from './commands/route/encap-types/bpf.interfaces';
export { AddRouteIoam6EncapArgs } from './commands/route/encap-types/ioam6.interfaces';
export { AddRouteIpEncapArgs } from './commands/route/encap-types/ip.interfaces';
export { AddRouteMplsEncapArgs } from './commands/route/encap-types/mpls.interfaces';
export { AddRouteSeg6EncapArgs } from './commands/route/encap-types/seg6.interfaces';
export { AddRouteSeg6LocalEncapArgs, EndXSeg6LocalEncapArgs, EndDt6Seg6LocalEncapArgs, EndB6Seg6LocalEncapArgs, EndDx6Seg6LocalEncapArgs, EndDt4Seg6LocalEncapArgs, EndDt46Seg6LocalEncapArgs, EndB6EncapsSeg6LocalEncapArgs } from './commands/route/encap-types/seg6local.interfaces';
/**
 * Routing policy database (RPDB) management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-rule.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { rule } from 'iproutejs';
 * ```
 */
export { ruleModule as rule };
export { RoutingTables, RuleTypes } from './commands/rule.constants';
export { RuleAddOptions } from './commands/rule/add.interfaces';
export { RuleShowOptions, RuleInfo } from './commands/rule/show.interfaces';
/**
 * State monitoring.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-monitor.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { monitor } from 'iproutejs';
 * ```
 */
export { monitorModule as monitor };
export { MonitorObjects } from './commands/monitor.constants';
export { MonitorOptions } from './commands/monitor/monitor.interfaces';
/**
 * Protocol address label management.
 *
 * @remarks
 * IPv6 address labels are used for address selection; they are described in RFC 3484.
 * Precedence is managed by userspace, and only the label itself is stored in the kernel.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-addrlabel.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { addrlabel } from 'iproutejs';
 * ```
 */
export { addrlabelModule as addrlabel };
export { AddrlabelAddOptions } from './commands/addrlabel/add.interfaces';
export { AddrlabelDelOptions } from './commands/addrlabel/del.interfaces';
export { AddrlabelInfo } from './commands/addrlabel/list.interfaces';
/**
 * Neighbour/ARP tables management.
 *
 * @remarks
 * Manipulates neighbour objects that establish bindings between protocol addresses and
 * link layer addresses for hosts sharing the same link.
 *
 * Neighbour entries are organized into tables.
 * The IPv4 neighbour table is also known by another name - the ARP table.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-neighbour.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { neighbour } from 'iproutejs';
 * ```
 */
export { neighbourModule as neighbour };
export { NudStates } from './commands/neighbour.constants';
export { NeighbourAddOptions } from './commands/neighbour/add.interfaces';
export { NeighbourDelOptions } from './commands/neighbour/del.interfaces';
export { NeighbourShowOptions, NeighbourInfo } from './commands/neighbour/show.interfaces';
export { NeighbourGetOptions } from './commands/neighbour/get.interfaces';
/**
 * Neighbour table configuration.
 *
 * @remarks
 * Controls the parameters for the neighbour tables.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-ntable.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { ntable } from 'iproutejs';
 * ```
 */
export { ntableModule as ntable };
export { NtableInfo, NtableShowOptions } from './commands/ntable/show.interfaces';
export { NtableChangeOptions } from './commands/ntable/change.interfaces';
/**
 * Tunnel configuration.
 *
 * @remarks
 * Tunnel objects are tunnels, encapsulating packets in IP packets and then sending them over
 * the IP infrastructure.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-tunnel.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { tunnel } from 'iproutejs';
 * ```
 */
export { tunnelModule as tunnel };
export { TunnelInfo, TunnelModes } from './commands/tunnel.constants';
export { TunnelAddOptions } from './commands/tunnel/add.interfaces';
export { Tunnel6rdOptions } from './commands/tunnel/6rd.interfaces';
export { TunnelPrlOptions } from './commands/tunnel/prl.interfaces';
/**
 * TunTap.
 *
 * TODO: Man page doesn't exist yet.
 * @category IP Commands
 *
 * @example
 * ```
 * import { tuntap } from 'iproutejs';
 * ```
 */
export { tuntapModule as tuntap };
export { TunTapTunnelModes } from './commands/tuntap.constants';
export { TunTapTunnelAddOptions } from './commands/tuntap/add.interfaces';
export { TunTapTunnelShowOptions, TunTapTunnelInfo } from './commands/tuntap/show.interfaces';
/**
 * Multicast addresses management.
 *
 * @category IP Commands
 *
 * @example
 * ```
 * import { maddress } from 'iproutejs';
 * ```
 */
export { maddressModule as maddress };
export { MaddressAddOptions } from './commands/maddress/add.interfaces';
export { MaddressShowOptions, MaddressInfo } from './commands/maddress/show.interfaces';
/**
 * Multicast routing cache management.
 *
 * @remarks
 * `mroute` objects are multicast routing cache entries created by a user-level mrouting daemon (f.e. `pimd` or `mrouted`).
 *
 * Due to the limitations of the current interface to the multicast routing engine, it is impossible
 * to change `mroute` objects administratively, so we can only display them.
 * This limitation will be removed in the future.
 *
 * @category IP Commands
 *
 * @example
 * ```
 * import { mroute } from 'iproutejs';
 * ```
 */
export { mrouteModule as mroute };
export { MrouteInfo, MrouteShowOptions } from './commands/mroute/show.interfaces';
/**
 * Custom utility library that complements `iproute` suite.
 * @category IP Commands
 *
 * @example
 * ```
 * import { utils } from 'iproutejs';
 * ```
 */
export { utilsModule as utils };
export { RoutingTable, RoutingTableOptions } from './utils/routing-tables.interfaces';
export { Command as Command };
export { MonitorCommand as MonitorCommand };
/** @hidden **/
declare const _default: {
    batch: {
        fromFile: typeof batchModule.fromFile;
        fromStdin: typeof batchModule.fromStdin;
    };
    link: {
        add: typeof linkModule.add;
        del: typeof linkModule.del;
        show: typeof linkModule.show;
        set: typeof linkModule.set;
        change: typeof linkModule.set;
    };
    address: {
        add: typeof addressModule.add;
        change: typeof addressModule.change;
        replace: typeof addressModule.replace;
        del: typeof addressModule.del;
        flush: typeof addressModule.flush;
        save: typeof addressModule.save;
        restore: typeof addressModule.restore;
        showdump: typeof addressModule.showdump;
        show: typeof addressModule.show;
    };
    rule: {
        add: typeof ruleModule.add;
        del: typeof ruleModule.del;
        save: typeof ruleModule.save;
        restore: typeof ruleModule.restore;
        flush: typeof ruleModule.flush;
        show: typeof ruleModule.show;
        list: typeof ruleModule.show;
    };
    route: {
        show: typeof routeModule.show;
        flush: typeof routeModule.flush;
        save: typeof routeModule.save;
        restore: typeof routeModule.restore;
        get: typeof routeModule.get;
        add: typeof routeModule.add;
        del: typeof routeModule.del;
        change: typeof routeModule.change;
        append: typeof routeModule.append;
        replace: typeof routeModule.replace;
    };
    monitor: typeof monitorModule.monitor;
    addrlabel: {
        add: typeof addrlabelModule.add;
        del: typeof addrlabelModule.del;
        flush: typeof addrlabelModule.flush;
        list: typeof addrlabelModule.list;
    };
    neighbour: {
        add: typeof neighbourModule.add;
        del: typeof neighbourModule.del;
        change: typeof neighbourModule.change;
        replace: typeof neighbourModule.replace;
        flush: typeof neighbourModule.flush;
        show: typeof neighbourModule.show;
        get: typeof neighbourModule.get;
    };
    ntable: {
        change: typeof ntableModule.change;
        show: typeof ntableModule.show;
    };
    tunnel: {
        add: typeof tunnelModule.add;
        del: typeof tunnelModule.del;
        change: typeof tunnelModule.change;
        show: typeof tunnelModule.show;
        prl: typeof tunnelModule.prl;
        v6Rd: typeof tunnelModule.v6Rd;
    };
    tuntap: {
        add: typeof tuntapModule.add;
        del: typeof tuntapModule.del;
        show: typeof tuntapModule.show;
        list: typeof tuntapModule.show;
        lst: typeof tuntapModule.show;
    };
    maddress: {
        add: typeof maddressModule.add;
        del: typeof maddressModule.del;
        show: typeof maddressModule.show;
    };
    mroute: {
        show: typeof mrouteModule.show;
    };
    utils: {
        ipForwarding: {
            v4: {
                enable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
                disable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
                status: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
            };
            v6: {
                enable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
                disable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
                status: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<string | null>;
            };
            enable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<void>;
            disable: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<void>;
            status: (globalOptions?: import("./common/interfaces/common").GlobalOptions) => Promise<{
                v4: string;
                v6: string;
            }>;
        };
        routingTables: {
            show: typeof utilsModule.routingTables.show;
            add: typeof utilsModule.routingTables.add;
            del: typeof utilsModule.routingTables.del;
            clear: typeof utilsModule.routingTables.clear;
        };
    };
};
export default _default;
