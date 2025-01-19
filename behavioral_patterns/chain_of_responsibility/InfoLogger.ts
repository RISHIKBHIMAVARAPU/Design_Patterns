import {LogProcessor} from './LogProcessor.js';

export class InfoLogger extends LogProcessor {

    constructor(nextLogger : LogProcessor){
        super(nextLogger);
    }

   log(logType: number, logMessage: string): void {

       if(logType == LogProcessor.INFO_LOG){
        console.log("printing from info logger : ",logMessage);
        }else{
            super.log(logType, logMessage)
        } 
    }
}