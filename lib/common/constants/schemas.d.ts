import { JSONSchemaType } from 'ajv';
import { Empty, FilePathRequiredGlobalOption, GlobalOptions, StdinRequiredGlobalOption } from '../interfaces/common';
import { ComplexIpCommandTestOptions } from '../interfaces/tests';
/**
 * Schema ids.
 *
 * @category Constants
 * @internal
 */
export declare enum SchemaIds {
    Empty = "#empty-schema",
    GlobalOptions = "#global-options",
    FilePathGlobalOption = "#global-options-file-path",
    StdinGlobalOption = "#global-options-stdin",
    ComplexIpCommandTestOptions = "#complex-ip-command-test-options",
    RoutingTablesOptions = "#routing-tables-options",
    LinkAdd = "#link-add",
    LinkDelete = "#link-delete",
    LinkShow = "#link-show",
    LinkSet = "#link-set",
    AddressAdd = "#address-add",
    AddressDelete = "#address-delete",
    AddressFlush = "#address-flush",
    AddressShow = "#address-show",
    RuleAdd = "#rule-add",
    RuleShow = "#rule-show",
    RouteShow = "#route-show",
    RouteGet = "#route-get",
    RouteAdd = "#route-add",
    Monitor = "#monitor",
    AddrlabelAdd = "#addrlabel-add",
    AddrlabelDel = "#addrlabel-del",
    NeighbourAdd = "#neighbour-add",
    NeighbourDel = "#neighbour-del",
    NeighbourShow = "#neighbour-show",
    NeighbourGet = "#neighbour-get",
    NtableShow = "#ntable-show",
    NtableChange = "#ntable-change",
    TunnelAdd = "#tunnel-add",
    Tunnel6rd = "#tunnel-6rd",
    TunnelPrl = "#tunnel-prl",
    TunTapAdd = "#tuntap-add",
    TunTapShow = "#tuntap-show",
    MaddressAdd = "#maddress-add",
    MaddressShow = "#maddress-show",
    MrouteShow = "#mroute-show"
}
export declare const GlobalOptionsSchema: JSONSchemaType<GlobalOptions>;
export declare const FilePathGlobalOptionSchema: JSONSchemaType<FilePathRequiredGlobalOption>;
export declare const StdinGlobalOptionSchema: JSONSchemaType<StdinRequiredGlobalOption>;
export declare const EmptySchema: JSONSchemaType<Empty>;
export declare const IpCommandTestOptionsSchema: JSONSchemaType<ComplexIpCommandTestOptions>;
