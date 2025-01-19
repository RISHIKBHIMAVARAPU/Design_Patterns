import {LogProcessor} from './LogProcessor.js';

export class ErrorLogger extends LogProcessor {

    constructor(nextLogger : LogProcessor){
        super(nextLogger);
    }

   log(logType: number, logMessage: string): void {

       if(logType == LogProcessor.ERROR_LOG){
        console.log("printing from error logger : ",logMessage);
        }else{
            super.log(logType, logMessage)
        } 
    }
}