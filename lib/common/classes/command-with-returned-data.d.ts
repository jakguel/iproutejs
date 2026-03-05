import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptions } from '../interfaces/common';
import Command from './command';
export default class CommandWithReturnedData<T_CommandOptions extends {
    [index: string]: any;
}> extends Command<T_CommandOptions> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptions;
    protected ipCmd: string[];
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptions, ipCmd: string[]);
    exec<T_ReturnData>(): Promise<this | T_ReturnData>;
}
