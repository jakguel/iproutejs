"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const monitor_constants_1 = require("../monitor.constants");
exports.MonitorSchema = {
    $id: schemas_1.SchemaIds.Monitor,
    type: 'object',
    required: ['object'],
    properties: {
        object: {
            type: 'string',
            enum: Object.values(monitor_constants_1.MonitorObjects),
            keyless: true
        },
        label: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        'all-nsid': {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=monitor.schema.js.map