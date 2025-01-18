import { IStockObservable } from "../observable/IStockObservable.js";
import { INotificationAlertObserver } from "./INotificationAlertObserver.js";

export class PhoneAlertObserver implements INotificationAlertObserver{
    mobileNumber : string;
    stockObservable : IStockObservable;

    constructor(mobileNumber : string, stockObservable : IStockObservable){
        this.mobileNumber = mobileNumber;
        this.stockObservable = stockObservable;
    }

    update(){
        this.sendMobileAlerts();
    }

    sendMobileAlerts(){
        console.log("sending mobile alerts to this number "+this.mobileNumber);
    }

}