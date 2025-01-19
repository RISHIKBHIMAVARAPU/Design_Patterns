import { ICommand } from "./ICommand.js";
import { AcReceiver } from "./AcReceiver.js";

export class AcTurnOffCommand implements ICommand{
    acReceiver:AcReceiver;

    constructor(acReceiver:AcReceiver){
        this.acReceiver=acReceiver;
    }
    undo(): void {
        this.acReceiver.turnOnAc();
    }

    execute(): void {
        this.acReceiver.turnOffAc();
    }    
}