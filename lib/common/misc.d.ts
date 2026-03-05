import { JSONSchemaType } from 'ajv';
import { SchemaIds } from './constants/schemas';
/** @internal */
export declare function validate<T_Options>(schemaId: SchemaIds, schema: JSONSchemaType<T_Options>, options: T_Options): void;
