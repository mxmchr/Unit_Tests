import { BookCollection, Book } from "../bookCollection";

describe("basic Test Suite", () => {

  let bookCollection:BookCollection

  beforeEach(()=> {
    bookCollection = new BookCollection()
  });

  it("Test if a title alredy exist", () => {
    // ARRANGE
    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1"

    });
    
    // ACT
    const addbookAction = () => bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1"
    });

    // ASSERT
    expect(addbookAction).toThrow("Book title already exists");
  });

  it("Test if a book is deleted", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1"

    });

    bookCollection.removeBook('title1');
    
    // ACT
   const lenght = bookCollection.getAllBooks().length

    // ASSERT
    expect(lenght).toBe(0);
  });

  it("Test if a book is found by his title", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1"
    });

    bookCollection.findBookByTitle('title1')
    
    // ACT
   const book = bookCollection.getAllBooks()

    // ASSERT
    expect(book[0].title).toBe('title1');
  });

  it("Test if a book is found by his author", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1"
    });

    bookCollection.findBookByAuthor('Jane Doe')
    
    // ACT
   const book = bookCollection.getAllBooks()

    // ASSERT
    expect(book[0].author).toBe('Jane Doe');
  });

});
