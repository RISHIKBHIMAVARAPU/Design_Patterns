export interface IColleague {
    placeBid(amount : number):void;
    receiveNotification(bidAmount : number) : void;
    getName():string;
}