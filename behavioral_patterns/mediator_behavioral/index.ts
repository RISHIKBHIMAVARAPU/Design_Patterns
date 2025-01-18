import { AuctionMediator } from "./AuctionMediator.js";
import { Bidder } from "./Bidder.js";

let auctionMediator = new AuctionMediator();

let bidder1 = new Bidder("rishik",auctionMediator);
let bidder2 = new Bidder("gopal",auctionMediator);

auctionMediator.addBidder(bidder1);
auctionMediator.addBidder(bidder2);

bidder1.placeBid(100);
bidder2.placeBid(200);


// this pattern is useful when no two objects can talk to each other 
// /this might look similar to observer design pattern (where we notfiy all the observers)
// once go through observer desing pattern code and compare once 
// every communication flows via mediator

// use cases for this design pattern
// online bidding system
// flight management system (assume a flight need to land at airport)