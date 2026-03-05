import { JSONSchemaType } from 'ajv';
import { execCommand } from '../exec-command';

import { SchemaIds }     from '../constants/schemas';
import { CommandError }  from '../errors/command';
import { GlobalOptions } from '../interfaces/common';
import Command           from './command';
import { parseCommandOutput } from '../parse-output';

export default class CommandWithReturnedData<T_CommandOptions extends { [index: string]: any; }> extends Command<T_CommandOptions> {
  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptions,
              protected ipCmd: string[]) {

    super(schemaId,
      schema,
      options,
      globalOptions,
      ipCmd);
  }

  override async exec<T_ReturnData>(): Promise<this | T_ReturnData> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    const { stderr, stdout } = await execCommand(this._cmdToExec);

    if (!stderr) {
      return parseCommandOutput<T_ReturnData>(stdout);
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, this._cmdToExec);
  }
}