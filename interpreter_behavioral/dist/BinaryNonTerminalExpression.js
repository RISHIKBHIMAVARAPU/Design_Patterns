export class BinaryNonTermainlExpression {
    constructor(leftExpression, rightExpression, operator) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operator = operator;
    }
    interpret(context) {
        let res = 0;
        switch (this.operator) {
            case '*':
                res = this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
                break;
            case '+':
                res = this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
                break;
        }
        console.log('res value---', res);
        return res;
    }
}
