import { Book } from "./Book.js";
import { Library } from "./Library.js";

let bookList = new Array<Book>();
bookList.push(new Book("life","rk"));
bookList.push(new Book("zindagi","pk"));
bookList.push(new Book("The earth","sk"));

let library = new Library(bookList);
let iterator = library.createIterator();

while(iterator.hasNext()) {
    console.log(iterator.next());
}