import { Book } from "./Book.js";
import { IIterator } from "./IIterator.js";

export class BookIterator implements IIterator{
    bookList : Book[];
    index : number;

    constructor(bookList : Book[]){
        this.bookList = bookList;
        this.index =0;
    }
    
    hasNext(): boolean {
        return this.index<this.bookList.length;
    }
    next() {
        return this.bookList[this.index++];
    }
    
}