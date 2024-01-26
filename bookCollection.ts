export type Book = {
    author: string;
    title: string;
    available: boolean;
  };
  
  export class BookCollection {
    private Books: Book[] = [];
  
    addBook(Book: Book): void {
      if (this.Books.some((b) => b.title === Book.title))
        throw new Error("Book title already exists");

      this.Books.push(Book);
    }
  
    removeBook(title: string): void {
      this.Books = this.Books.filter((Book) => Book.title !== title);
    }
  
    findBookByTitle(title: string): Book | undefined {
      return this.Books.find((Book) => Book.title === title);
    }

    findBookByAuthor(author: string): Book | undefined {
      return this.Books.find((Book) => Book.author === author);
    }
  
    getAllBooks(): Book[] {
      return this.Books;
    }

    borrow(title: string): void {
      const book = this.findBookByTitle(title);
  
      if (book) {
        book.available = false;
      }
    }

    return(title: string): void {
      const book = this.findBookByTitle(title);
  
      if (book) {
        book.available = true;
      }
    }

    
  }