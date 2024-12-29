import { IStockObservable } from "../observable/IStockObservable.js";
import { INotificationAlertObserver } from "./INotificationAlertObserver.js";

export class EmailAlertObserver implements INotificationAlertObserver{
    stockObservable: IStockObservable;
    emailAddress : String;

    constructor(stockObservable:IStockObservable,userName:String){
        this.stockObservable= stockObservable;
        this.emailAddress = userName;
    }

    update(){
        this.sendEmailNotification();
    }

    sendEmailNotification(){
        console.log("sending email notification to "+this.emailAddress)
    }


}