import { BinaryNonTermainlExpression } from "./BinaryNonTerminalExpression.js";
import { Context } from "./Context.js";
import { NonTerminalMultiplyExpression } from "./NonTerminalExpression.js";
import { TerminalExpression } from "./TerminalExpression.js";
let context = new Context();
context.put("a", 1);
context.put("b", 2);
console.log(new NonTerminalMultiplyExpression(new TerminalExpression("a"), new TerminalExpression('b')).interpret(context));
// a*b
// below code for testing binarynonterminalexpression
let context2 = new Context();
context.put("a", 1);
context.put("b", 2);
context.put("c", 3);
context.put("d", 4);
console.log(new BinaryNonTermainlExpression(new BinaryNonTermainlExpression(new TerminalExpression("a"), new TerminalExpression("b"), '+'), new BinaryNonTermainlExpression(new TerminalExpression("c"), new TerminalExpression("d"), '+'), '*').interpret(context));
// (a+b)*(c+d)
// given a expression with associated context you should interpret it
// here we consider the example of mathematical expressions
// we have context as assocaited numerical values
// expression will have 2 types 
// we define one interface for both of the expressions with interpret(context) method
// terminal expression
// non terminal expression
