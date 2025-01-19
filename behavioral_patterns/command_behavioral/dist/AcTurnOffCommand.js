export class AcTurnOffCommand {
    constructor(acReceiver) {
        this.acReceiver = acReceiver;
    }
    undo() {
        this.acReceiver.turnOnAc();
    }
    execute() {
        this.acReceiver.turnOffAc();
    }
}
