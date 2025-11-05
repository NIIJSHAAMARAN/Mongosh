// You are managing a database for a bookstore. Your task is to retrieve and display books based on different search criteria.
// Complete the following:
// Use a database named BookStoreDB and a collection named Books. Assume Books already contains documents with fields such as:
// title (string)
// author (string)
// price (double)
// year (integer)
// available (boolean)
// Insert sample data:
// db.Books.insertMany([
//     { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 399.99, year: 1997, available: true },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", price: 299.99, year: 1937, available: true },
//     { title: "The Da Vinci Code", author: "Dan Brown", price: 499.99, year: 2003, available: false },
//     { title: "A Game of Thrones", author: "George R.R. Martin", price: 599.99, year: 1996, available: true },
//     { title: "The Girl on the Train", author: "Paula Hawkins", price: 349.99, year: 2015, available: true },
//     { title: "Becoming", author: "Michelle Obama", price: 449.99, year: 2018, available: true },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 199.99, year: 1951, available: false },
//     { title: "The Night Circus", author: "Erin Morgenstern", price: 299.99, year: 2011, available: true },
//     { title: "1984", author: "George Orwell", price: 249.99, year: 1949, available: true },
//     { title: "Educated", author: "Tara Westover", price: 399.99, year: 2018, available: false }
// ]);


// Write queries to:
// a) Find and display all books priced less than 500, formatted neatly.
// b) Find one book written by "J.K. Rowling".
// c) Find and display books published after the year 2010 AND priced greater than or equal to 300.
// d) Find books that are either priced less than 200 OR are not available.
// e) Find books whose price is NOT equal to 450.
use BookStoreDB
   db.Books.insertMany([
     { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 399.99, year: 1997, available: true },
     { title: "The Hobbit", author: "J.R.R. Tolkien", price: 299.99, yearyear: 1937, available: true },
     { title: "The Da Vinci Code", author: "Dan Brown", price: 499.99, yeyear: 2003, available: false },
     { title: "A Game of Thrones", author: "George R.R. Martin", price: 599.99, year: 1996, available: true },
     { title: "The Girl on the Train", author: "Paula Hawkins", price: 349.99, year: 2015, available: true },
     { title: "Becoming", author: "Michelle Obama", price: 449.99, year: 2018, available: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 199.99, year: 1951, available: false },
    { title: "The Night Circus", author: "Erin Morgenstern", price: 299.99, year: 2011, available: true },
    { title: "1984", author: "George Orwell", price: 249.99, year: 1949, available: true },
    { title: "Educated", author: "Tara Westover", price: 399.99, year: 2018, available: false }
 ]);
  db.Books.find({price:{$lt:500}}).pretty()
  db.Books.find({author:"J.K. Rowling"}).pretty()
   db.Books.find({$and:[{year:{$gt:2010}},{price:{$gte:300}}]}).pretty()
   db.Books.find({$or:[{price:{$lt:200}},{available:false}]}).pretty()
    db.Books.find({price:{$ne:450}}).pretty()
