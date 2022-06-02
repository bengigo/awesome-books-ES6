// WHERE WILL TIME STUFF GO?

// import book methods
import Book from './modules/bookMethods.js';

// import adding event
import addBook from './modules/addBook.js';

// import list page
import displayList from './modules/listPage.js';

// import form page
import displayForm from './modules/formPage.js';

// import contact page
import displayContact from './modules/contactPage.js';

// import from luxon
import { DateTime } from './modules/luxon.js';

// const bookTitle = document.querySelector('#title');
// const authorName = document.querySelector('#author');
// const addButton = document.querySelector('#add-button');

// display book (construct book in here)
Book.displayBooks();

// delete book
Book.deleteBooks();

// store books
Book.storeBooks();

// add book
addBook();

// show date-time
const now = DateTime.now();
const time = document.querySelector('#date-time');
time.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

// (page management) navigation
displayList();

displayForm();

displayContact();
