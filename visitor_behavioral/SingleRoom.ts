import { IRoomElement } from "./IRoomElement.js";
import { IRoomVisitor } from "./IRoomVisitor.js";

export class SingleRoom implements IRoomElement{
    roomPrice : number =0;
    accept(visitor: IRoomVisitor): void {
        visitor.visit(this);
    }
}