import MonitorCommand from '../common/classes/monitor-command';
import { GlobalOptions } from '../common/interfaces/common';
import { MonitorOptions } from './monitor/monitor.interfaces';
/**
 * State monitoring.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { monitor } from 'iproute';
 * ```
 *
 * Monitor all objects state changes
 * ```
 * monitor({
 *   object: MonitorObjects.All
 * });
 * ```
 *
 * After starting the monitor, you can start watching for changes
 * ```
 * let command: MonitorCommand<MonitorOptions>;
 *
 * monitor({
 *   object: MonitorObjects.All
 * })
 * .then((_command) => {
 *   command = _command;
 *
 *   command.on(MonitorObjects.All, (data: MonitorEmittedData) => {
 *     // Do something with `data`.
 *   });
 *
 *   command.on('error', (error) => {
 *     // Do something with `data`.
 *   });
 * });
 *
 * setTimeout(() => {
 *   command.close();
 * }, 5000);
 * ```
 */
export declare function monitor(options: MonitorOptions, globalOptions?: GlobalOptions): Promise<MonitorCommand<MonitorOptions>>;
export default monitor;
