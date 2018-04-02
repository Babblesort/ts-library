function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell To Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'Crying of Lot 49', author: 'Thomas Pynchon', available: true, category: Category.Fiction },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Whale }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var bookCount = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            firstAvailable = book.title;
            break;
        }
    }
    console.log("Total books: " + bookCount);
    console.log("First Available: " + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: " + Category[categoryFilter]);
    return GetAllBooks()
        .filter(function (book) { return book.category == categoryFilter; })
        .map(function (book) { return book.title; });
}
function GetBookById(id) {
    return GetAllBooks().filter(function (book) { return book.id === id; });
}
function LogBookTitles(titles) {
    titles.forEach(function (title, i) { return console.log(++i + " - " + title); });
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Whale"] = 4] = "Whale";
})(Category || (Category = {}));
var fictionBooks = GetBookTitlesByCategory(Category.Fiction);
LogBookTitles(fictionBooks);
//# sourceMappingURL=app.js.map