import { IRoomVisitor } from "./IRoomVisitor.js";

export interface IRoomElement {
    accept(visitor : IRoomVisitor ):void;
}