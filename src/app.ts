function GetAllBooks() {
  let books = [
    { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { title: 'A Farewell To Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { title: 'Crying of Lot 49', author: 'Thomas Pynchon', available: true, category: Category.Fiction },
    { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ];

  return books;
}

function LogFirstAvailable(books): void {
  const bookCount: number = books.length;
  let firstAvailable: string = '';

  for (const book of books) {
    if (book.available) {
      firstAvailable = book.title;
      break;
    }
  }

  console.log(`Total books: ${bookCount}`);
  console.log(`First Available: ${firstAvailable}`)
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
  console.log(`Getting books in category: ${categoryFilter}`);

  return GetAllBooks()
    .filter(book => book.category == categoryFilter)
    .map(book => book.title);

}

function LogBookTitles(titles: Array<string>): void {
  titles.forEach(title => console.log(title));
}

enum Category { Biography, Poetry, Fiction, History, Children }

const allBooks = GetAllBooks();

LogFirstAvailable(allBooks);