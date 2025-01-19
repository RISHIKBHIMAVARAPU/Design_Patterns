import { LogProcessor } from './LogProcessor.js';
export class DebugLogger extends LogProcessor {
    constructor(nextLogger) {
        super(nextLogger);
    }
    log(logType, logMessage) {
        if (logType == LogProcessor.DEBUG_LOG) {
            console.log("printing from debug logger : ", logMessage);
        }
        else {
            super.log(logType, logMessage);
        }
    }
}
