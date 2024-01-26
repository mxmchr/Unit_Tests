import { BookCollection, Book } from "../../bookCollection";
import { getAveragePrice } from "../../BookPriceCollectionService";

describe("basic Test Suite", () => {

  let bookCollection:BookCollection
  let book1: Book

  beforeEach(()=> {
    bookCollection = new BookCollection()
    book1 = {
      author: "Jane Doe", 
      title: "title1",
      available: true,
    }
  });

  it("Test if a title alredy exist", () => {
    // ARRANGE
    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1",
      available: true,
    });
    
    // ACT
    const addbookAction = () => bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1",
      available: true,
    });

    // ASSERT
    expect(addbookAction).toThrow("Book title already exists");
  });

  it("Test if a book is deleted", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1",
      available: true,

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
      title: "title1",
      available: true,
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
      title: "title1",
      available: true,
    });

    bookCollection.findBookByAuthor('Jane Doe')
    
    // ACT
   const book = bookCollection.getAllBooks()

    // ASSERT
    expect(book[0].author).toBe('Jane Doe');
  });

  it("Test if the property available change on false when the book is borrowed", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1",
      available: true,
    });

    bookCollection.borrow('title1')
    
    // ACT
   const book = bookCollection.findBookByTitle('title1')

    // ASSERT
    expect(book?.available).toBeFalsy;
  });

  it("Test if the property available change on true when the book is returned", () => {
    // ARRANGE

    bookCollection.addBook({
      author: "Jane Doe", 
      title: "title1",
      available: true,
    });

    bookCollection.return('title1')
    
    // ACT
   const book = bookCollection.findBookByTitle('title1')

    // ASSERT
    expect(book?.available).toBeTruthy;
  });  

});

import * as BookPriceCollectionService from "../../BookPriceCollectionService";

jest.mock("../../BookPriceCollectionService", () => ({
  getAveragePrice: jest.fn((title: string, country: string) => 30), // Mock implementation, adjust as needed
}));

describe("BookPriceCollectionService Test Suite", () => {
  it("Test getAveragePrice with mock implementation", () => {
    // Act
    const price = BookPriceCollectionService.getAveragePrice("Sample Title", "FR");

    // Assert
    expect(price).toBe(30);
  });
});

