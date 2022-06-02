// import book methods
import Book from './bookMethods.js';

export default function addBook() {
  const addButton = document.querySelector('#add-button');
  const bookTitle = document.querySelector('#title');
  const authorName = document.querySelector('#author');
  const errorMessage = document.querySelector('#alert');

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    //if the input fields are empty, there should be an error msg

    // if (Title === '' || Author === '') {
    //   document.querySelector('.alert').innerHTML = 'Please add a title and an author';
    // } else {
    //   document.querySelector('.alert').innerHTML = '';
    // }

    if(bookTitle.value === '' || authorName.value === '') {
      errorMessage.innerHTML = 'Please fill in all fields.'
    } else {
      Book.storeBooks();

      bookTitle.value = '';
      authorName.value = '';
  
      window.location.reload();
    }

   
  });
}