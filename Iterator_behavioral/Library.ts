import { Book } from "./Book.js";
import { BookIterator } from "./BookIterator.js";
import { IAggregator } from "./IAggregator.js";
import { IIterator } from "./IIterator.js";

export class Library implements IAggregator{
    bookList : Book[];
    constructor(bookList : Book[]){
        this.bookList = bookList;
    }

    createIterator(): IIterator {
        return new BookIterator(this.bookList);
    }
}