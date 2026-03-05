import { execCommand } from '../exec-command';
import { JSONSchemaType } from 'ajv';

import { SchemaIds, StdinGlobalOptionSchema } from '../constants/schemas';
import { CommandError } from '../errors/command';
import { GlobalOptionsWithRequiredStdin } from '../interfaces/common';
import Command from './command';
import { validate } from '../misc';


export default class CommandWithStdin<T_CommandOptions extends {
  [index: string]: any;
}> extends Command<T_CommandOptions> {
  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptionsWithRequiredStdin,
              protected ipCmd: string[]) {

    super(schemaId,
      schema,
      options,
      globalOptions,
      ipCmd);

    validate<GlobalOptionsWithRequiredStdin>(SchemaIds.StdinGlobalOption, StdinGlobalOptionSchema, globalOptions);

    this.buildCmd();
  }

  protected override buildCmd() {
    super.buildCmd();

    this._cmd       = this.cmd.concat('- <<EOF\n', ...[`${ this.globalOptions.stdin }`], '\nEOF');
    this._cmdToExec = this.cmd.join(' ');
  }

  override async exec(): Promise<this> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    const { stderr } = await execCommand(this._cmdToExec);

    if (!stderr) {
      return this;
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, this._cmdToExec);
  }
}