export class NonTerminalMultiplyExpression {
    constructor(leftExpression, rightExpression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    interpret(context) {
        return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
    }
}
