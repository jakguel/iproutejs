import { execCommand } from '../exec-command';
import { JSONSchemaType } from 'ajv';

import { SchemaIds }                         from '../constants/schemas';
import { CommandError }                      from '../errors/command';
import { GlobalOptionsWithRequiredFilePath } from '../interfaces/common';
import CommandWithRedirectFromFilepath       from './command-with-redirect-from-filepath';
import { parseCommandOutput }                from '../parse-output';


export default class CommandWithRedirectFromFilepathAndReturnedData<T_CommandOptions extends {
  [index: string]: any;
}> extends CommandWithRedirectFromFilepath<T_CommandOptions> {

  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptionsWithRequiredFilePath,
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

    const {
            stderr,
            stdout
          } = await execCommand(this._cmdToExec);

    if (!stderr) {
      return parseCommandOutput<T_ReturnData>(stdout);
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, this._cmdToExec);
  }
}