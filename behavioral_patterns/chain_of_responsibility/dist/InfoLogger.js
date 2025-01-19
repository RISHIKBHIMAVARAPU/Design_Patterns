import { LogProcessor } from './LogProcessor.js';
export class InfoLogger extends LogProcessor {
    constructor(nextLogger) {
        super(nextLogger);
    }
    log(logType, logMessage) {
        if (logType == LogProcessor.INFO_LOG) {
            console.log("printing from info logger : ", logMessage);
        }
        else {
            super.log(logType, logMessage);
        }
    }
}
