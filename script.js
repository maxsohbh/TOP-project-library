// object constructor
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

//add books to table row
function listIn(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class='btn togg'>${book.read ? `Read` : `Not Read`}</a></td>
    <td><a href="#" class='btn btn-danger delete'>DEL</td>
    `
    list.appendChild(row);
}

// handle storage




//event listen to display books: document laod
document.addEventListener("DOMContentLoaded", displayBook)
// event to listen to clicks
document.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    const newBook = new Book(title, author, pages, read);
    // console.log(newBook);
    //add book to list
    listIn(newBook);

    //clearfields
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#read").value = '';
})

//event to remove a book with delete button
document.querySelector("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

    //work in progress, how to change the object read status to false
    if (e.target.classList.contains("togg")) {
        // e.target.innerHTML = `boop`;
        console.log(e.target);
    }
})
