"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableDisableAutoToggle = exports.EnableDisableAsStringToggle = exports.EnableDisableToggle = exports.OnOffToggle = void 0;
/**
 * Represents a simple toggle state, either `on` or `off`.
 * @category Constants
 */
var OnOffToggle;
(function (OnOffToggle) {
    OnOffToggle["On"] = "on";
    OnOffToggle["Off"] = "off";
})(OnOffToggle || (exports.OnOffToggle = OnOffToggle = {}));
/**
 * Represents a binary state for enabling or disabling a feature or functionality.
 * @category Constants
 */
var EnableDisableToggle;
(function (EnableDisableToggle) {
    EnableDisableToggle[EnableDisableToggle["Enable"] = 1] = "Enable";
    EnableDisableToggle[EnableDisableToggle["Disable"] = 0] = "Disable";
})(EnableDisableToggle || (exports.EnableDisableToggle = EnableDisableToggle = {}));
/**
 * Represents the state for enabling or disabling a feature, expressed as strings.
 * @category Constants
 */
var EnableDisableAsStringToggle;
(function (EnableDisableAsStringToggle) {
    EnableDisableAsStringToggle["Enable"] = "enable";
    EnableDisableAsStringToggle["Disable"] = "disable";
})(EnableDisableAsStringToggle || (exports.EnableDisableAsStringToggle = EnableDisableAsStringToggle = {}));
/**
 * Represents the state for enabling, disabling, or setting a feature to automatic mode.
 * @category Constants
 */
var EnableDisableAutoToggle;
(function (EnableDisableAutoToggle) {
    EnableDisableAutoToggle["Enable"] = "enable";
    EnableDisableAutoToggle["Disable"] = "disable";
    EnableDisableAutoToggle["Auto"] = "auto";
})(EnableDisableAutoToggle || (exports.EnableDisableAutoToggle = EnableDisableAutoToggle = {}));
//# sourceMappingURL=attribute-values.js.map