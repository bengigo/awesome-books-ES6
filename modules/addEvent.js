//import book methods
import Book from './modules/bookMethods.js';

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    //

    Book.storeBooks();

    bookTitle.value = '';
    authorName.value = '';

    window.location.reload();
});