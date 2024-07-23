// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

// UI Class: Handles UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3232232",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "3434434",
      },
    ];

    const books = StoredBooks;
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector("#book__list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td class='book-delete'>
      <button class="delete__btn">
        <img class='delete' src='/trash.svg' />
      </button></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handles Storage

// Event: Displays Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Get form value

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    const alert = document.querySelector(".alert");
    alert.classList.add("active", "failure");
    setTimeout(() => {
      alert.classList.remove("active", "failure");
    }, 2000);
  }

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Add Book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector("#book__list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
