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
    constructor (name, borrowerId) { // defines properties of the class
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) { // adds method borrowBook
        this.borrowedBooks.push(book.title); // adds the book to the borrowed books array
    }

    returnBook(book) { // adds method returnBook
        const index = this.borrowedBooks.indexOf(book.title); // finds the book
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

// Task 3: Creating a Library Class //

class Library { // creates class "Library"
    constructor () { // defines properties
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) { // creates addBook method
        this.books.push(book); // adds book to the array
    }

    listBooks() { // creates listbooks method
        this.books.forEach(book => { // for each book
            console.log(book.getDetails());  // display the details
        });
    }

    lendBook(borrowerId, isbn) { // TASK 4: adds lendBook method
        const borrower = this.borrowers.find(x => x.borrowerId === borrowerId); // Find borrower ID
        if (!borrower) {
            console.log("Borrower not found");
            return;
          }

        const book = this.books.find(b => b.isbn === isbn);  // TASK 4: find book isbn
        if (!book) { // If the ISBN does not match anything in the availabile ISBNs
            console.log("Book not found"); // Log that book isn't found
            return;
         }

        if (book.copies > 0) { // TASK 4: if there is at least 1 copy available
            book.updateCopies(-1); // reduce number of copies by 1
            borrower.borrowBook(book); // 
            console.log("Book has been borrowed!");  // log that book was borrowed successfully
          } else {
            console.log("No copies available to borrow."); // otherwise say there are none available
          }
    }
}

const library = new Library (); // creates new instance in library
library.addBook(book1); // adds book 1 to the library
library.borrowers.push(borrower1); // adds the borrower to the array
library.listBooks(); // expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4: Implementing Book Borrowing //

    // Added method lendBook to task 3's library class //

library.lendBook(201, 123456); // lend this ISBN to this borrower ID
console.log(book1.getDetails()); // expected output: "Title: The Great Gatsby. Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3:"
console.log(borrower1.borrowedBooks); // expected output: ["The Great Gatsby"]