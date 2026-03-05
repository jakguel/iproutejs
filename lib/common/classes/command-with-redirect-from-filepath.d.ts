import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptionsWithRequiredFilePath } from '../interfaces/common';
import Command from './command';
export default class CommandWithRedirectFromFilepath<T_CommandOptions extends {
    [index: string]: any;
}> extends Command<T_CommandOptions> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptionsWithRequiredFilePath;
    protected ipCmd: string[];
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptionsWithRequiredFilePath, ipCmd: string[]);
    protected buildCmd(): void;
    exec(): Promise<this>;
}
