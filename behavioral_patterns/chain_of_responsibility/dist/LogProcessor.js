export class LogProcessor {
    constructor(nextLogProcessor) {
        this.nextLogProcessor = nextLogProcessor;
    }
    log(logType, logMessage) {
        if (this.nextLogProcessor != null) {
            this.nextLogProcessor.log(logType, logMessage);
        }
    }
}
LogProcessor.INFO_LOG = 1;
LogProcessor.DEBUG_LOG = 2;
LogProcessor.ERROR_LOG = 3;
