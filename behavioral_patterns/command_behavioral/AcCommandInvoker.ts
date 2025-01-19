import { ICommand } from "./ICommand.js";

export class AcCommandInvoker {

    commandStack : Array<ICommand>;
    acCommand : ICommand;

    constructor(acCommand : ICommand){
        this.acCommand = acCommand;
        this.commandStack = new Array<ICommand>();
    }

    pressButton(){
        this.acCommand.execute();
        this.commandStack.push(this.acCommand);
    }

    undo(){
        let prevAcCommand = this.commandStack.pop();
        if(prevAcCommand){
            prevAcCommand.execute();
        }
    }

    setAcCommand(acCommand:ICommand){
        this.acCommand= acCommand;
    }
}