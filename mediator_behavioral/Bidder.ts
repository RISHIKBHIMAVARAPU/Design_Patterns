import { IAuctionMediator } from "./IAuctionMediator.js";
import { IColleague } from "./IColleague.js";

export class Bidder implements IColleague{
    name : string;
    auctionMediator : IAuctionMediator;

    constructor(name : string, auctionMediator : IAuctionMediator){
        this.name = name;
        this.auctionMediator  = auctionMediator;
    }

    placeBid(amount: number): void {
        this.auctionMediator.notifyBidders(this.name,amount);
    }

    receiveNotification(bidAmount: number): void {
        console.log("received the bid notification amount : ",bidAmount);
       
    }

    getName(): string {
        return this.name;
    }
}