"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFamilies = exports.AddressScopes = void 0;
/**
 * The scope of the area where this address is valid.
 * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
 * Predefined scope values are:
 *
 * @category Constants
 */
var AddressScopes;
(function (AddressScopes) {
    /** The address is globally valid. */
    AddressScopes["Global"] = "global";
    /** (IPv6 only, deprecated) The address is site local, i.e. it is valid inside this site. */
    AddressScopes["Site"] = "site";
    /** The address is link local, i.e. it is valid only on this device. */
    AddressScopes["Link"] = "link";
    /** The address is valid only inside this host. */
    AddressScopes["Host"] = "host";
})(AddressScopes || (exports.AddressScopes = AddressScopes = {}));
/**
 * Representing various network address families.
 * @category Constants
 */
var AddressFamilies;
(function (AddressFamilies) {
    /** IPv4 protocol. */
    AddressFamilies["Inet"] = "inet";
    /** IPv6 protocol. */
    AddressFamilies["Inet6"] = "inet6";
    /** Multi-Protocol Label Switching. */
    AddressFamilies["Mpls"] = "mpls";
    /** Bridging (MAC-level). */
    AddressFamilies["Bridge"] = "bridge";
    /** Link layer interface. */
    AddressFamilies["Link"] = "link";
})(AddressFamilies || (exports.AddressFamilies = AddressFamilies = {}));
//# sourceMappingURL=address.constants.js.map