export class TerminalExpression {
    constructor(stringValue) {
        this.stringValue = stringValue;
    }
    interpret(context) {
        return context.get(this.stringValue);
    }
}
