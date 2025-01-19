import { LogProcessor } from './LogProcessor.js';
export class ErrorLogger extends LogProcessor {
    constructor(nextLogger) {
        super(nextLogger);
    }
    log(logType, logMessage) {
        if (logType == LogProcessor.ERROR_LOG) {
            console.log("printing from error logger : ", logMessage);
        }
        else {
            super.log(logType, logMessage);
        }
    }
}
