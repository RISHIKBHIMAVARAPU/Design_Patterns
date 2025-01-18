import { IAuctionMediator } from "./IAuctionMediator.js";
import { IColleague } from "./IColleague.js";

export class AuctionMediator implements IAuctionMediator{
    bidderList : Array<IColleague>;
    constructor(){
        this.bidderList = new Array<IColleague>();
    }

    addBidder(bidder: IColleague): void {
        this.bidderList.push(bidder);
    }

    notifyBidders(name: string, bidAmount: number): void {
        for(let bidder of this.bidderList) {
            if(bidder.getName() !== name) {
                bidder.receiveNotification(bidAmount);
            }
        }
    }
    
}