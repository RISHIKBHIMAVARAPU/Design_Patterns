export class PhoneAlertObserver {
    constructor(mobileNumber, stockObservable) {
        this.mobileNumber = mobileNumber;
        this.stockObservable = stockObservable;
    }
    update() {
        this.sendMobileAlerts();
    }
    sendMobileAlerts() {
        console.log("sending mobile alerts to this number " + this.mobileNumber);
    }
}
