class Book {
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
}