// const bookTitle = document.querySelector('#title');
// const authorName = document.querySelector('#author');
// const addButton = document.querySelector('#add-button');

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now().toString();
  }

  static displayBooks() {
    const displayContainer = document.querySelector('#display-section');
    let awesomeBooks = [];
    awesomeBooks = awesomeBooks.concat(JSON.parse(localStorage.getItem('awesomeBooks') || '[]'));
    awesomeBooks.forEach((book) => {
      displayContainer.innerHTML += `
                            <div class="book">
                              <p>"${book.title}" by ${book.author}</p>
                              <button class="delete" id="${book.id}">Delete</button>
                            </div>
                            `;
    });
  }

    static deleteBooks = () => {
      const deleteButton = document.querySelectorAll('.delete');
      deleteButton.forEach((element) => {
        element.addEventListener('click', (event) => {
          let awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
          awesomeBooks = awesomeBooks.filter((book) => book.id !== event.target.id);
          localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
          window.location.reload();
        });
      });
    };

    static storeBooks() {
      let awesomeBooks = [];
      const bookTitle = document.querySelector('#title');
      const authorName = document.querySelector('#author');
      if (bookTitle.value !== '' && authorName.value !== '') {
        const book = new Book(bookTitle.value, authorName.value);

        awesomeBooks.push(book);
        awesomeBooks = awesomeBooks.concat(JSON.parse(localStorage.getItem('awesomeBooks') || '[]'));
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
      }
    }
}