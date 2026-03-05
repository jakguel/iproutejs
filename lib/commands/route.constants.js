"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncapTypes = exports.EncapSeg6LocalActions = exports.RoutePreferences = void 0;
/**
 * Route preference values.
 * @category Constants
 */
var RoutePreferences;
(function (RoutePreferences) {
    /** The route has the lowest priority. */
    RoutePreferences["Low"] = "low";
    /** The route has the default priority. */
    RoutePreferences["Medium"] = "medium";
    /** The route has the highest priority. */
    RoutePreferences["High"] = "high";
})(RoutePreferences || (exports.RoutePreferences = RoutePreferences = {}));
/**
 * Encap-seg6 local actions.
 * @category Constants
 */
var EncapSeg6LocalActions;
(function (EncapSeg6LocalActions) {
    /**
     * Regular SRv6 processing as intermediate segment endpoint.
     *
     * This action only accepts packets with a non-zero Segments Left value.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["End"] = "End";
    /**
     * Regular SRv6 processing as intermediate segment endpoint.
     *
     * Additionally, forward processed packets to given next-hop.
     *
     * This action only accepts packets with a non-zero Segments Left value.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndX"] = "End.X";
    /**
     * Decapsulate inner IPv6 packet and forward it to the specified next-hop.
     *
     * If the argument is set to `::`, then the next-hop is selected according to the local selection rules.
     *
     * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv6 packet.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndDX6"] = "End.DX6";
    /**
     * Decapsulate the inner IPv6 packet and forward it according to the specified lookup table.
     *
     * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
     *
     * If `vrftable` is used, the argument must be a VRF device associated with the table id.
     *
     * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode
     * turned on (`net.vrf.strict_mode=1`).
     *
     * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv6 packet.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndDT6"] = "End.DT6";
    /**
     * Decapsulate the inner IPv4 packet and forward it according to the specified lookup table.
     *
     * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
     *
     * The argument must be a VRF device associated with the table id.
     *
     * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode
     * turned on (`net.vrf.strict_mode=1`).
     *
     * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv4 packet.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndDT4"] = "End.DT4";
    /**
     * Decapsulate the inner IPv4 or IPv6 packet and forward it according to the specified lookup table.
     *
     * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
     *
     * The argument must be a VRF device associated with the table id.
     *
     * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode turned on
     * (`net.vrf.strict_mode=1`). This action only accepts packets with either a zero Segments Left value or no SRH
     * at all, and an inner IPv4 or IPv6 packet.
     *
     * Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndDT46"] = "End.DT46";
    /**
     *  Insert the specified SRH immediately after the IPv6 header, update the DA with the first segment
     *  of the newly inserted SRH, then forward the resulting packet.
     *
     *  The original SRH is not modified.
     *
     *  This action only accepts packets with a non-zero Segments Left value.
     *
     *  Other matching packets are dropped.
     */
    EncapSeg6LocalActions["EndB6"] = "End.B6";
    /**
     * Regular SRv6 processing as intermediate segment endpoint.
     *
     * Additionally, encapsulate the matching packet within an outer IPv6 header followed by the specified SRH.
     *
     * The destination address of the outer IPv6 header is set to the first segment of the new SRH.
     *
     * The source address is set as described in `ip-sr(8)`.
     */
    EncapSeg6LocalActions["EndB6Encaps"] = "End.B6.Encaps";
})(EncapSeg6LocalActions || (exports.EncapSeg6LocalActions = EncapSeg6LocalActions = {}));
/**
 * Tunnel encapsulation types.
 * @category Constants
 */
var EncapTypes;
(function (EncapTypes) {
    /** Encapsulation type MPLS. */
    EncapTypes["Mpls"] = "mpls";
    /** IP encapsulation (Geneve, GRE, VXLAN, ...). */
    EncapTypes["Ip"] = "ip";
    /** Execution of BPF program. */
    EncapTypes["Bpf"] = "bpf";
    /** Encapsulation type IPv6 Segment Routing. */
    EncapTypes["Seg6"] = "seg6";
    /** Local SRv6 segment processing. */
    EncapTypes["Seg6local"] = "seg6local";
    /** Encapsulation type IPv6 IOAM. */
    EncapTypes["Ioam6"] = "ioam6";
})(EncapTypes || (exports.EncapTypes = EncapTypes = {}));
//# sourceMappingURL=route.constants.js.map