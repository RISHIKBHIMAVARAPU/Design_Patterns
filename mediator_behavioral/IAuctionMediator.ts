import { IColleague } from "./IColleague.js";

export interface IAuctionMediator{
    addBidder(bidder : IColleague):void;
    notifyBidders(name : string,bidAmount : number):void;
}