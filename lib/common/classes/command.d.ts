import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptions } from '../interfaces/common';
/**
 * Class to group common behavior among commands.
 *
 * @category Classes
 * @internal
 */
export default class Command<T_CommandOptions extends {
    [index: string]: any;
}> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptions;
    protected ipCmd: string[];
    protected _cmd: Array<string | number>;
    protected _cmdToExec: string;
    get cmd(): Array<string | number>;
    get cmdToExec(): string;
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptions, ipCmd: string[]);
    protected buildCmd(): void;
    private getCmdFromOptions;
    exec<T_ReturnData = {}>(): Promise<this | T_ReturnData>;
}
