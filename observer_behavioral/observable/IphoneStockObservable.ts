import { INotificationAlertObserver } from "../observer/INotificationAlertObserver.js";
import { IStockObservable } from "./IStockObservable.js";

export class IphoneStockObservable implements IStockObservable {
    observersList :Array<INotificationAlertObserver> ;
    stockCount : number ;
    
    constructor(){
        this.observersList= new Array<INotificationAlertObserver>();
        this.stockCount = 0;
    }

    addObserver(observer: INotificationAlertObserver):boolean{
        this.observersList.push(observer);
        return true;
    }

    removeObserver(removeObserver: INotificationAlertObserver):boolean{
        this.observersList = this.observersList.filter((observer)=>{
           return  observer!=removeObserver
        })

        return true;
    }

    setStockCount(count :number):void{
        if(this.stockCount ==0){
            this.stockCount  =count;
            this.notifyObservers();
        }
        this.stockCount = count;
    }

    notifyObservers():void{
        for(let observer of this.observersList){
            observer.update();
        }
    }

    getStockCount():number{
        return this.stockCount;
    }

}