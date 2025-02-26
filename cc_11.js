// Task 1: Creating a Book Class //
 
class Book { // establish class "Book"
    constructor (title, author, isbn, copies) { // defines properties of the class
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() { // defines method getDetails
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // returns formatted string
    }

    updateCopies(quantity) { // defines method updateCopies
        this.copies += quantity; // adds quantity when book is returned or borrowed
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // adds new instance to the class
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby", Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); // Removes 1 copy from quantity
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby", Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Creating a Borrower Class //

class Borrower { // establishes class "Borrower"
    constructor (name, borrowerId, borrowedBooks) { // defines properties of the class
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) { // adds method borrowBook
        this.borrowedBooks.push(book); // adds the book to the borrowed books array
    }

    returnBook(book) { // adds method returnBook
        const index = this.borrowedBooks.indexOf(book); // finds the book
        if (index !== -1) { // finds matching book
            this.borrowedBooks.splice(index, 1); // removes that matching book from the array
        }
    }
}

const borrower1 = new Borrower("Alice Johnson", 201); // adds new borrower instance
borrower1.borrowBook("The Great Gatsby"); // adds The Great Gatsby to the borrowed book array
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby") // removes book from borrowed book array
console.log(borrower1.borrowedBooks); // Expected output: []