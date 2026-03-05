import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptions } from '../interfaces/common';
import Command from './command';
import { MonitorObjects } from '../../commands/monitor.constants';
import { MonitorEmittedData } from '../interfaces/monitor';
/**
 * Class to group common behavior among monitor commands.
 *
 * @category Classes
 * @internal
 */
export default class MonitorCommand<T_CommandOptions extends {
    [index: string]: any;
}> extends Command<T_CommandOptions> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptions;
    protected ipCmd: string[];
    static parseLineOutput(eventLine: string): MonitorEmittedData;
    private emitter;
    private spawnedProcess;
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptions, ipCmd: string[]);
    exec(): Promise<this>;
    /** Listens to the events triggered by the monitor. */
    on(event: MonitorObjects | 'error', cb: (data?: any) => void): this;
    /** Closes the monitor. */
    close(): void;
}
