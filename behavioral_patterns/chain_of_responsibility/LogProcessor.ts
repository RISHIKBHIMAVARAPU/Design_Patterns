export abstract class LogProcessor{
    static  INFO_LOG=1;
    static  DEBUG_LOG = 2;
    static ERROR_LOG = 3;

    nextLogProcessor : LogProcessor;

    constructor(nextLogProcessor:LogProcessor){
        this.nextLogProcessor = nextLogProcessor;
    }

    log(logType : number, logMessage:string){
        if(this.nextLogProcessor!=null){
            this.nextLogProcessor.log(logType,logMessage);
        }
    }
}