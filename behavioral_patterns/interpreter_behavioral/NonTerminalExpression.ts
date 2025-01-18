import { Context } from "./Context.js";
import { IExpression } from "./IExpression.js";

export class NonTerminalMultiplyExpression implements IExpression {

    leftExpression : IExpression;
    rightExpression : IExpression;

    constructor(leftExpression : IExpression, rightExpression : IExpression){
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }

    interpret(context: Context): number {
        return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
    } 

}