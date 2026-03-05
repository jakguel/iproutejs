"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkCanArgsSchema = void 0;
const attribute_values_1 = require("../../../common/constants/attribute-values");
exports.AddLinkCanArgsSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        bitrate: {
            type: 'integer',
            minimum: 1,
            maximum: 1000000,
            nullable: true
        },
        'sample-point': {
            type: 'number',
            minimum: 0,
            maximum: 0.999,
            nullable: true
        },
        tq: {
            type: 'number',
            nullable: true
        },
        'prop-seg': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        'phase-seg1': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        'phase-seg2': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        sjw: {
            type: 'integer',
            minimum: 1,
            maximum: 4,
            nullable: true
        },
        dbitrate: {
            type: 'integer',
            minimum: 1,
            maximum: 1000000,
            nullable: true
        },
        'dsample-point': {
            type: 'number',
            minimum: 0,
            maximum: 0.999,
            nullable: true
        },
        dtq: {
            type: 'number',
            nullable: true
        },
        'dprop-seg': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        'dphase-seg1': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        'dphase-seg2': {
            type: 'integer',
            minimum: 1,
            maximum: 8,
            nullable: true
        },
        dsjw: {
            type: 'integer',
            minimum: 1,
            maximum: 4,
            nullable: true
        },
        loopback: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'listen-only': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'triple-sampling': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'one-shot': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'berr-reporting': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        fd: {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'fd-non-iso': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'presume-ack': {
            type: 'string',
            enum: Object.values(attribute_values_1.OnOffToggle),
            nullable: true
        },
        'restart-ms': {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        restart: {
            type: 'boolean',
            nullable: true
        }
    }
};
//# sourceMappingURL=can.schema.js.map