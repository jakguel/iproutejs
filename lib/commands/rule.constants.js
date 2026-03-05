"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleTypes = exports.RoutingTables = void 0;
/**
 * Routing table special names.
 * @category Constants
 */
var RoutingTables;
(function (RoutingTables) {
    /**
     * The `local` table is a special routing table containing high priority control routes for local
     * and broadcast addresses.
     */
    RoutingTables["Local"] = "local";
    /** The `main` table is the normal routing table containing all non-policy routes.  */
    RoutingTables["Main"] = "main";
    /**
     * The `default` table is empty.
     * It is reserved for some post-processing if no previous default rules selected the packet.
     */
    RoutingTables["Default"] = "default";
})(RoutingTables || (exports.RoutingTables = RoutingTables = {}));
/**
 * Rule special values.
 * @category Constants
 */
var RuleTypes;
(function (RuleTypes) {
    /** The rule prescribes to return the route found in the routing table referenced by the rule. */
    RuleTypes["Unicast"] = "unicast";
    /** The rule prescribes to silently drop the packet. */
    RuleTypes["Blackhole"] = "blackhole";
    /** The rule prescribes to generate a 'Network is unreachable' error. */
    RuleTypes["Unreachable"] = "unreachable";
    /** The rule prescribes to generate 'Communication is administratively prohibited' error. */
    RuleTypes["Prohibit"] = "prohibit";
    /** The rule prescribes to translate the source address of the IP packet into some other value. */
    RuleTypes["Nat"] = "nat";
})(RuleTypes || (exports.RuleTypes = RuleTypes = {}));
//# sourceMappingURL=rule.constants.js.map