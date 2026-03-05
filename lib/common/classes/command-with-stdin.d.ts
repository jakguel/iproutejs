import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptionsWithRequiredStdin } from '../interfaces/common';
import Command from './command';
export default class CommandWithStdin<T_CommandOptions extends {
    [index: string]: any;
}> extends Command<T_CommandOptions> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptionsWithRequiredStdin;
    protected ipCmd: string[];
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptionsWithRequiredStdin, ipCmd: string[]);
    protected buildCmd(): void;
    exec(): Promise<this>;
}
