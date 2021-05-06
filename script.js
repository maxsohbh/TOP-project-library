//book class / object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//method display book, remove book
//loop book array and call the method to add books to list
function displayBook() {
    const myLibrary = [
        {
            title: "Lord of the Rings",
            author: 'Tolkien',
            pages: 600,
            read: false
        },
        {
            title: "Harry Potter",
            author: "JK Rowling",
            pages: 900,
            read: true
        }
    ];
    const books = myLibrary;
    books.forEach((book) => listIn(book));
}

function listIn(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class='btn btn-info'></td>
    <td><a href="#" class='btn btn-danger delete'></td>
    `
    list.appendChild(row);
}


//add books to table row

// handle storage

//event listen to display books: document laod

// event to listen to clicks


//event to remove a boook with delete button


displayBook();