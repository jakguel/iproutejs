"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XdpOptionTypes = exports.BridgeSlavePortStates = exports.AddrGenMode = exports.SecureAssociationEncodings = exports.MacsecValidationModeOptions = exports.MldVersions = exports.IgmpVersions = exports.MultiCastRouterOptions = exports.HsrProtocols = exports.HsrVersions = exports.MacvlanMacvtapModes = exports.TtlSpecialValues = exports.ErspanDirections = exports.IpoIbModes = exports.IpipSipDeviceModes = exports.SecondaryUdpEncapsulations = exports.DontFragmentFlagValues = exports.VlanProtocols = exports.ExtendedLinkTypes = exports.LinkTypes = void 0;
/**
 * Link Types.
 * @category Constants
 */
exports.LinkTypes = {
    /** Ethernet Bridge device. */
    Bridge: 'bridge',
    /** Bonding device. */
    Bond: 'bond',
    /** Dummy network interface. */
    Dummy: 'dummy',
    /** High-availability Seamless Redundancy device. */
    Hsr: 'hsr',
    /** Intermediate Functional Block device. */
    Ifb: 'ifb',
    /** IP over Infiniband device. */
    Ipoib: 'ipoib',
    /** Virtual interface base on link layer address (MAC). */
    Macvlan: 'macvlan',
    /** Virtual interface based on link layer address (MAC) and TAP. */
    Macvtap: 'macvtap',
    /** Virtual Controller Area Network interface. */
    Vcan: 'vcan',
    /** Controller Area Network interface. */
    Can: 'can',
    /** Virtual Controller Area Network tunnel interface. */
    Vxcan: 'vxcan',
    /** Virtual ethernet interface. */
    Veth: 'veth',
    /** 802.1q tagged virtual LAN interface. */
    Vlan: 'vlan',
    /** Virtual eXtended LAN. */
    Vxlan: 'vxlan',
    /** Virtual tunnel interface IPv4|IPv6 over IPv6. */
    Ip6tnl: 'ip6tnl',
    /** Virtual tunnel interface IPv4 over IPv4. */
    Ipip: 'ipip',
    /** Virtual tunnel interface IPv6 over IPv4. */
    Sit: 'sit',
    /** Virtual tunnel interface GRE over IPv4. */
    Gre: 'gre',
    /** Virtual L2 tunnel interface GRE over IPv4. */
    Gretap: 'gretap',
    /** Encapsulated Remote SPAN over GRE and IPv4. */
    Erspan: 'erspan',
    /** Virtual tunnel interface GRE over IPv6. */
    Ip6gre: 'ip6gre',
    /** Virtual L2 tunnel interface GRE over IPv6. */
    Ip6gretap: 'ip6gretap',
    /** Encapsulated Remote SPAN over GRE and IPv6. */
    Ip6erspan: 'ip6erspan',
    /** Virtual tunnel interface. */
    Vti: 'vti',
    /** Netlink monitoring device. */
    Nlmon: 'nlmon',
    /** Interface for L3 (IPv6/IPv4) based VLANs. */
    Ipvlan: 'ipvlan',
    /** Interface for L3 (IPv6/IPv4) based VLANs and TAP. */
    Ipvtap: 'ipvtap',
    /** Interface for 6LoWPAN (IPv6) over IEEE 802.15.4 Bluetooth. */
    Lowpan: 'lowpan',
    /** GEneric NEtwork Virtualization Encapsulation. */
    Geneve: 'geneve',
    /** Bare UDP L3 encapsulation support. */
    Bareudp: 'bareudp',
    /** Interface for IEEE 802.1AE MAC Security (MAC‐sec). */
    Macsec: 'macsec',
    /** Interface for L3 VRF domains. */
    Vrf: 'vrf',
    /** Interface for netdev API tests. */
    Netdevsim: 'netdevsim',
    /** Qualcomm rmnet device. */
    Rmnet: 'rmnet',
    /** Virtual xfrm interface. */
    Xfrm: 'xfrm'
};
/**
 * Extended Link Types.
 * @category Constants
 */
exports.ExtendedLinkTypes = Object.assign(Object.assign({}, exports.LinkTypes), { 
    /** Bridge slave interface. */
    BridgeSlave: 'bridge_slave', 
    /** Bond slave interface. */
    BondSlave: 'bond_slave' });
/**
 * VLAN protocols.
 * @category Constants
 */
var VlanProtocols;
(function (VlanProtocols) {
    VlanProtocols["802.1Q"] = "802.1Q";
    VlanProtocols["802.1ad"] = "802.1ad";
})(VlanProtocols || (exports.VlanProtocols = VlanProtocols = {}));
/**
 * Dont fragment flag values.
 * @category Constants
 */
var DontFragmentFlagValues;
(function (DontFragmentFlagValues) {
    /** Causes the bit to be copied from the original IP header. */
    DontFragmentFlagValues["Inherit"] = "inherit";
    /** Cause the bit to be always unset. */
    DontFragmentFlagValues["Unset"] = "unset";
    /** Cause the bit to be always set. */
    DontFragmentFlagValues["Set"] = "set";
})(DontFragmentFlagValues || (exports.DontFragmentFlagValues = DontFragmentFlagValues = {}));
/**
 * Specifies type of secondary UDP encapsulation.
 * @category Constants
 */
var SecondaryUdpEncapsulations;
(function (SecondaryUdpEncapsulations) {
    /** Indicates Foo-Over-UDP. */
    SecondaryUdpEncapsulations["Fou"] = "fou";
    /** Indicates Generic UDP Encapsulation. */
    SecondaryUdpEncapsulations["Gue"] = "gue";
    SecondaryUdpEncapsulations["None"] = "none";
})(SecondaryUdpEncapsulations || (exports.SecondaryUdpEncapsulations = SecondaryUdpEncapsulations = {}));
/**
 * Specifies mode in which device should run.
 * @category Constants
 */
var IpipSipDeviceModes;
(function (IpipSipDeviceModes) {
    /** Indicates IPv6-Over-IPv4 */
    IpipSipDeviceModes["Ip6ip"] = "ip6ip";
    /** Indicates "IPv4-Over-IPv4". */
    IpipSipDeviceModes["Ipip"] = "ipip";
    /** Indicates MPLS-Over-IPv4. */
    IpipSipDeviceModes["Mplsip"] = "mplsip";
    /** Indicates IPv6, IPv4 or MPLS Over IPv4. */
    IpipSipDeviceModes["Any"] = "any";
})(IpipSipDeviceModes || (exports.IpipSipDeviceModes = IpipSipDeviceModes = {}));
/**
 * Specifies whether the link should be in datagram mode or connected mode.
 * @category Constants
 */
var IpoIbModes;
(function (IpoIbModes) {
    /**
     * This is the default mode. In datagram mode, packets are sent independently of each other,
     * without a connection between sender and receiver.
     * */
    IpoIbModes["Datagram"] = "datagram";
    /**
     * In connected mode, a reliable connection is established before data is exchanged, which can
     * offer higher throughput and lower latency in some situations. However, connected mode uses more
     * resources and may not be supported by all InfiniBand hardware.
     */
    IpoIbModes["Connected"] = "connected";
})(IpoIbModes || (exports.IpoIbModes = IpoIbModes = {}));
/**
 * Specifies the ERSPAN v2 mirrored traffic's direction.
 * @category Constants
 */
var ErspanDirections;
(function (ErspanDirections) {
    ErspanDirections["Ingress"] = "ingress";
    ErspanDirections["Egress"] = "egress";
})(ErspanDirections || (exports.ErspanDirections = ErspanDirections = {}));
/**
 * TTL special values.
 * @category Constants
 */
var TtlSpecialValues;
(function (TtlSpecialValues) {
    TtlSpecialValues["Auto"] = "auto";
    TtlSpecialValues["Inherit"] = "inherit";
})(TtlSpecialValues || (exports.TtlSpecialValues = TtlSpecialValues = {}));
/**
 * Modes for macvlan and macvtap interfaces.
 * @category Constants
 */
var MacvlanMacvtapModes;
(function (MacvlanMacvtapModes) {
    /**
     * Do not allow communication between macvlan instances on the same physical interface,
     * even if the external switch supports hairpin mode.
     */
    MacvlanMacvtapModes["Private"] = "private";
    /**
     * Virtual Ethernet Port Aggregator mode.
     *
     * Data from one macvlan instance to the other on the same physical inter face is
     * transmitted over the physical interface.
     *
     * Either the attached switch needs to support hairpin mode, or there must be a
     * TCP/IP router forwarding the packets in order to allow communication.
     *
     * This is the default mode.
     */
    MacvlanMacvtapModes["Vepa"] = "vepa";
    /**
     * In bridge mode, all endpoints are directly connected to each other, communication
     * is not redirected through the physical interface's peer.
     */
    MacvlanMacvtapModes["Bridge"] = "bridge";
    /**
     * This mode gives more power to a single endpoint, usually in `macvtap` mode.
     *
     * It is not allowed for more than one endpoint on the same physical interface.
     *
     * All traffic will be forwarded to this endpoint, allowing virtio guests to change
     * MAC address or set promiscuous mode in order to bridge the interface or create
     * vlan interfaces on top of it.
     *
     * By default, this mode forces the underlying interface into promiscuous mode.
     *
     * Passing the `nopromisc` flag prevents this, so the promisc flag may be controlled
     * using standard tools.
     *
     * @see {@link PassthruNopromisc}
     */
    MacvlanMacvtapModes["Passthru"] = "passthru";
    /**  @see {@link Passthru} */
    MacvlanMacvtapModes["PassthruNopromisc"] = "passthru nopromisc";
    /**
     * Allows one to set a list of allowed mac address, which is used to match against
     * source mac address from received frames on underlying interface.
     *
     * This allows creating mac based VLAN associations, instead of standard port or
     * tag based.
     *
     * The feature is useful to deploy 802.1x mac based behavior, where drivers of underlying
     * interfaces doesn't allow that.
     *
     * By default, packets are also considered (duplicated) for destination-based MACVLAN.
     *
     * Passing the `nodst` flag stops matching packets from also going through the destination-based flow.
     *
     * @see {@link SourceNodst}
     */
    MacvlanMacvtapModes["Source"] = "source";
    /** @see {@link Source} */
    MacvlanMacvtapModes["SourceNodst"] = "source nodst";
})(MacvlanMacvtapModes || (exports.MacvlanMacvtapModes = MacvlanMacvtapModes = {}));
/**
 * Protocol version of the interface.
 * Defaults to {@link HsrVersions.v2010}
 *
 * @category Constants
 */
var HsrVersions;
(function (HsrVersions) {
    HsrVersions[HsrVersions["v2010"] = 0] = "v2010";
    HsrVersions[HsrVersions["v2012"] = 1] = "v2012";
})(HsrVersions || (exports.HsrVersions = HsrVersions = {}));
/**
 * Protocol of the interface.
 * Defaults to {@link HsrProtocols.HSR}
 *
 * @category Constants
 */
var HsrProtocols;
(function (HsrProtocols) {
    /** High-availability Seamless Redundancy. */
    HsrProtocols[HsrProtocols["HSR"] = 0] = "HSR";
    /** Parallel Redundancy Protocol. */
    HsrProtocols[HsrProtocols["PRP"] = 1] = "PRP";
})(HsrProtocols || (exports.HsrProtocols = HsrProtocols = {}));
/**
 * Multicast router options.
 * @category Constants
 */
var MultiCastRouterOptions;
(function (MultiCastRouterOptions) {
    /**
     * The bridge does not act as a multicast router. It will not forward any IP multicast packets
     * between different interfaces.
     *
     * It will forward multicast packets only to ports where multicast listeners are detected.
     */
    MultiCastRouterOptions[MultiCastRouterOptions["Disabled"] = 0] = "Disabled";
    /**
     * The bridge acts as a multicast router and will forward all IP multicast packets.
     * This is the default setting.
     */
    MultiCastRouterOptions[MultiCastRouterOptions["Automatic"] = 1] = "Automatic";
    /**
     *  The bridge uses the multicast router discovery protocol to learn whether it should
     *  forward multicast packets as a multicast router.
     */
    MultiCastRouterOptions[MultiCastRouterOptions["PermanentlyEnabled"] = 2] = "PermanentlyEnabled";
})(MultiCastRouterOptions || (exports.MultiCastRouterOptions = MultiCastRouterOptions = {}));
/**
 * IGMP protocol versions.
 * @category Constants
 */
var IgmpVersions;
(function (IgmpVersions) {
    IgmpVersions[IgmpVersions["v2"] = 2] = "v2";
    IgmpVersions[IgmpVersions["v3"] = 3] = "v3";
})(IgmpVersions || (exports.IgmpVersions = IgmpVersions = {}));
/**
 * Mld versions.
 * @category Constants
 */
var MldVersions;
(function (MldVersions) {
    MldVersions[MldVersions["v1"] = 1] = "v1";
    MldVersions[MldVersions["v2"] = 2] = "v2";
})(MldVersions || (exports.MldVersions = MldVersions = {}));
/**
 * Macsec validation mode options.
 * @category Constants
 */
var MacsecValidationModeOptions;
(function (MacsecValidationModeOptions) {
    MacsecValidationModeOptions["Strict"] = "strict";
    MacsecValidationModeOptions["Check"] = "check";
    MacsecValidationModeOptions["Disabled"] = "disabled";
})(MacsecValidationModeOptions || (exports.MacsecValidationModeOptions = MacsecValidationModeOptions = {}));
/**
 * Secure association encodings.
 * @category Constants
 */
var SecureAssociationEncodings;
(function (SecureAssociationEncodings) {
    SecureAssociationEncodings[SecureAssociationEncodings["Implicit"] = 0] = "Implicit";
    SecureAssociationEncodings[SecureAssociationEncodings["Explicit"] = 1] = "Explicit";
})(SecureAssociationEncodings || (exports.SecureAssociationEncodings = SecureAssociationEncodings = {}));
/**
 * Is used to configure IPv6 address generation mode for a given interface.
 * @category Constants
 */
var AddrGenMode;
(function (AddrGenMode) {
    /** Use a Modified EUI-64 format interface identifier. */
    AddrGenMode["Eui64"] = "eui64";
    /** Disable automatic address generation. */
    AddrGenMode["None"] = "none";
    /**
     * Generate the interface identifier based on a preset
     * `/proc/sys/net/ipv6/conf/{default,DEVICE}/stable_secret`.
     */
    AddrGenMode["StableSecret"] = "stable_secret";
    /** Like {@link StableSecret}, but auto-generate a new random secret if none is set. */
    AddrGenMode["Random"] = "random";
})(AddrGenMode || (exports.AddrGenMode = AddrGenMode = {}));
/**
 * Bridge slave port states.
 * @category Constants
 */
var BridgeSlavePortStates;
(function (BridgeSlavePortStates) {
    BridgeSlavePortStates[BridgeSlavePortStates["Disabled"] = 0] = "Disabled";
    BridgeSlavePortStates[BridgeSlavePortStates["Listening"] = 1] = "Listening";
    BridgeSlavePortStates[BridgeSlavePortStates["Learning"] = 2] = "Learning";
    BridgeSlavePortStates[BridgeSlavePortStates["Forwarding"] = 3] = "Forwarding";
    BridgeSlavePortStates[BridgeSlavePortStates["Blocking"] = 4] = "Blocking";
})(BridgeSlavePortStates || (exports.BridgeSlavePortStates = BridgeSlavePortStates = {}));
/**
 * Xdp option types.
 * @category Constants
 */
var XdpOptionTypes;
(function (XdpOptionTypes) {
    XdpOptionTypes["Off"] = "off";
    XdpOptionTypes["Object"] = "object";
    XdpOptionTypes["Pinned"] = "pinned";
})(XdpOptionTypes || (exports.XdpOptionTypes = XdpOptionTypes = {}));
//# sourceMappingURL=link.constants.js.map