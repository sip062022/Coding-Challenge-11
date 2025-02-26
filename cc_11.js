// Task 1: Creating a Book Class //
 
class Book { // establish class "Book"
    constructor (title, author, isbn, copies) { // defines properties of the class
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails () { // defines method getDetails
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // returns formatted string
    }

    updateCopies (quantity) { // defines method updateCopies
        this.copies += quantity; // adds quantity when book is returned or borrowed
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // adds new instance to the class
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby", Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); // Removes 1 copy from quantity
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby", Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"