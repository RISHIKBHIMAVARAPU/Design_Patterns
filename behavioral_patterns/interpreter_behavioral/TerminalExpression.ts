import { Context } from "./Context.js";
import { IExpression } from "./IExpression.js";

export class TerminalExpression implements IExpression {
    stringValue : string;

    constructor(stringValue : string){
        this.stringValue= stringValue;
    }

    interpret(context: Context): number {
        return context.get(this.stringValue);
    }
}