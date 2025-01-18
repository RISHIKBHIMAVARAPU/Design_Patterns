import { INotificationAlertObserver } from "../observer/INotificationAlertObserver.js";

export interface IStockObservable{
    addObserver(observer: INotificationAlertObserver):boolean;
    removeObserver(observer : INotificationAlertObserver):boolean;
    notifyObservers():void;
    setStockCount(count :number):void;
    getStockCount():number;
}