export class Bidder {
    constructor(name, auctionMediator) {
        this.name = name;
        this.auctionMediator = auctionMediator;
    }
    placeBid(amount) {
        this.auctionMediator.notifyBidders(this.name, amount);
    }
    receiveNotification(bidAmount) {
        console.log("received the bid notification amount : ", bidAmount);
    }
    getName() {
        return this.name;
    }
}
