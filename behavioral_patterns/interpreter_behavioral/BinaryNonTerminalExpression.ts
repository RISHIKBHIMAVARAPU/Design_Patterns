import { Context } from "./Context.js";
import { IExpression } from "./IExpression.js";

export class BinaryNonTermainlExpression implements IExpression {

    operator : string;
    leftExpression : IExpression;
    rightExpression : IExpression;

    constructor(leftExpression : IExpression, rightExpression : IExpression,operator : string){
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operator = operator;
    }
    interpret(context: Context): number {
        let res= 0;

        switch(this.operator){
            case '*':
                res = this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
                break;
            case '+':
                res = this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
                break;
        }
        console.log('res value---',res);
        return res;
    }
}