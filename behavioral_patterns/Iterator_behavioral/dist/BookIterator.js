export class BookIterator {
    constructor(bookList) {
        this.bookList = bookList;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.bookList.length;
    }
    next() {
        return this.bookList[this.index++];
    }
}
