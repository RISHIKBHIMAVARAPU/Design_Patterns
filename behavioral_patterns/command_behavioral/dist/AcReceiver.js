export class AcReceiver {
    constructor() {
        this.acOnState = false;
        this.temperature = 0;
    }
    turnOnAc() {
        this.acOnState = true;
        console.log('-----ac is being turned on---------');
    }
    turnOffAc() {
        this.acOnState = false;
        console.log('-----ac is being turned off---------');
    }
}
