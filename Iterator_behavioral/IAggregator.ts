import { IIterator } from "./IIterator.js";

export interface IAggregator{
    createIterator(): IIterator;
}