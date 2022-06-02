// import book methods
import Book from './bookMethods.js';

export default function addBook() {
  const addButton = document.querySelector('#add-button');
  const bookTitle = document.querySelector('#title');
  const authorName = document.querySelector('#author');

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    //

    Book.storeBooks();

    bookTitle.value = '';
    authorName.value = '';

    window.location.reload();
  });
}