import { BookIterator } from "./BookIterator.js";
export class Library {
    constructor(bookList) {
        this.bookList = bookList;
    }
    createIterator() {
        return new BookIterator(this.bookList);
    }
}
