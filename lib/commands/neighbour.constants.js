"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NudStates = void 0;
/**
 * Neighbour Unreachability Detection (NUD) states.
 * @category Constants
 */
var NudStates;
(function (NudStates) {
    /** The neighbour entry is valid forever and can be only be removed administratively. */
    NudStates["Permanent"] = "permanent";
    /**
     * The neighbour entry is valid.
     * No attempts to validate this entry will be made but it can be removed when its lifetime expires.
     */
    NudStates["Noarp"] = "noarp";
    /** The neighbour entry is valid until the reachability timeout expires. */
    NudStates["Reachable"] = "reachable";
    /**
     * The neighbour entry is valid but suspicious.
     * This option to `ip neigh` does not change the neighbour state if it was valid and the address
     * is not changed by this command.
     */
    NudStates["Stale"] = "stale";
    /**
     * This is a pseudo state used when initially creating a neighbour entry or after trying to
     * remove it before it becomes free to do so.
     */
    NudStates["None"] = "none";
    /** The neighbour entry has not (yet) been validated/resolved. */
    NudStates["Incomplete"] = "incomplete";
    /** Neighbor entry validation is currently delayed. */
    NudStates["Delay"] = "delay";
    /** Neighbor is being probed. */
    NudStates["Probe"] = "probe";
    /** Max number of probes exceeded without success, neighbor validation has ultimately failed. */
    NudStates["Failed"] = "failed";
})(NudStates || (exports.NudStates = NudStates = {}));
//# sourceMappingURL=neighbour.constants.js.map