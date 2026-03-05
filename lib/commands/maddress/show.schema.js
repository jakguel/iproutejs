"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaddressShowSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
exports.MaddressShowSchema = {
    $id: schemas_1.SchemaIds.MaddressShow,
    type: 'object',
    required: [],
    properties: {
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        }
    }
};
//# sourceMappingURL=show.schema.js.map