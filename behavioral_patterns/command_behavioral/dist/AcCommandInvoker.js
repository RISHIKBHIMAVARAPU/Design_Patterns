export class AcCommandInvoker {
    constructor(acCommand) {
        this.acCommand = acCommand;
        this.commandStack = new Array();
    }
    pressButton() {
        this.acCommand.execute();
        this.commandStack.push(this.acCommand);
    }
    undo() {
        let prevAcCommand = this.commandStack.pop();
        if (prevAcCommand) {
            prevAcCommand.execute();
        }
    }
    setAcCommand(acCommand) {
        this.acCommand = acCommand;
    }
}
