export class EmailAlertObserver {
    constructor(stockObservable, userName) {
        this.stockObservable = stockObservable;
        this.emailAddress = userName;
    }
    update() {
        this.sendEmailNotification();
    }
    sendEmailNotification() {
        console.log("sending email notification to " + this.emailAddress);
    }
}
