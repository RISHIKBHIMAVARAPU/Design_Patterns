export class AuctionMediator {
    constructor() {
        this.bidderList = new Array();
    }
    addBidder(bidder) {
        this.bidderList.push(bidder);
    }
    notifyBidders(name, bidAmount) {
        for (let bidder of this.bidderList) {
            if (bidder.getName() !== name) {
                bidder.receiveNotification(bidAmount);
            }
        }
    }
}
