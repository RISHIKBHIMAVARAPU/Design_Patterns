import { Context } from "./Context.js";

export interface IExpression{
    interpret(context: Context):number;
}