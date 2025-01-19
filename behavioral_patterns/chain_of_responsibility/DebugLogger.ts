import {LogProcessor} from './LogProcessor.js';

export class DebugLogger extends LogProcessor {

    constructor(nextLogger : LogProcessor){
        super(nextLogger);
    }

   log(logType: number,logMessage: string): void {

       if(logType == LogProcessor.DEBUG_LOG){
        console.log("printing from debug logger : ",logMessage);
        }else{
            super.log(logType,  logMessage)
        } 
    }
}