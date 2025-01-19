import { ICommand } from "./ICommand.js";
import { AcReceiver } from "./AcReceiver.js";

export class AcTurnOnCommand implements ICommand{
    acReceiver:AcReceiver;

    constructor(acReceiver:AcReceiver){
        this.acReceiver=acReceiver;
    }
    undo(): void {
        this.acReceiver.turnOffAc();
    }

    execute(): void {
        this.acReceiver.turnOnAc();
    }
    
}