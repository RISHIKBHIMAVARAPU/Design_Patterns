export class AcTurnOnCommand {
    constructor(acReceiver) {
        this.acReceiver = acReceiver;
    }
    undo() {
        this.acReceiver.turnOffAc();
    }
    execute() {
        this.acReceiver.turnOnAc();
    }
}
