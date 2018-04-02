function GetAllBooks() {
  let books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell To Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'Crying of Lot 49', author: 'Thomas Pynchon', available: true, category: Category.Fiction },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Whale }
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
  console.log(`Getting books in category: ${Category[categoryFilter]}`);

  return GetAllBooks()
    .filter(book => book.category == categoryFilter)
    .map(book => book.title);
}

function GetBookById(id: number) {
  return GetAllBooks().filter(book => book.id === id);
}

function LogBookTitles(titles: Array<string>): void {
  titles.forEach((title, i) => console.log(`${++i} - ${title}`));
}

enum Category { Biography, Poetry, Fiction, History, Whale }

const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
LogBookTitles(fictionBooks);