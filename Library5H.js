// You are managing a database for a library that keeps a collection called Books. Each document has these fields:
// title (string)
// author (string)
// year (integer)
// copies (integer)
// available (boolean)
// Insert sample data
// db.Books.insertMany([
//     { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, copies: 8, available: true },
//     { title: "Data Structures", author: "John Smith", year: 2015, copies: 3, available: true },
//     { title: "Modern JavaScript", author: "Emily Brown", year: 2020, copies: 4, available: false },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, copies: 6, available: true },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, copies: 10, available: true },
//     { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, copies: 2, available: false },
//     { title: "The C Programming Language", author: "Unknown", year: 1978, copies: 5, available: true },
//     { title: "Sapiens", author: "Yuval Noah Harari", year: 2014, copies: 7, available: true },
//     { title: "The Alchemist", author: "Paulo Coelho", year: 1988, copies: 1, available: false },
//     { title: "Dune", author: "Frank Herbert", year: 1965, copies: 4, available: true }
// ]);
// Your tasks:
// Display all books published after the year 2010, formatted neatly.
// Find one book written by "Jane Austen".
// Find all books that have more than 5 copies available and were published on or before 2000.
// Find all books that either have fewer than 3 copies or are not currently available.
// Update the number of copies of the book titled "Data Structures" to 10 using the update() method.
// Change the availability of the book titled "Modern JavaScript" to true by first retrieving it and then saving the updated document.
// Remove one book where the author is "Unknown".

db.Books.insertMany([
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, copies: 8, available: true },
    { title: "Data Structures", author: "John Smith", year: 2015, copies: 3, available: true },
    { title: "Modern JavaScript", author: "Emily Brown", year: 2020, copies: 4, available: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, copies: 6, available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, copies: 10, available: true },
    { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, copies: 2, available: false },
    { title: "The C Programming Language", author: "Unknown", year: 1978, copies: 5, available: true },
    { title: "Sapiens", author: "Yuval Noah Harari", year: 2014, copies: 7, available: true },
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988, copies: 1, available: false },
    { title: "Dune", author: "Frank Herbert", year: 1965, copies: 4, available: true }
]);

db.Books.find({year:{$gt:2010}}).pretty()
db.Books.findOne({author:"Jane Austen"})
 db.Books.find({$and:[{copies:{$gt:5}},{year:{$lte:2000}}]}).pretty()
  db.Books.find({$or:[{copies:{$lt:3}},{available:false}]}).pretty()
   db.Books.update({title:"Data Structures"},{$set:{copies:10}})
db.Books.find({title:"Modern JavaScript"})
db.Books.save({_id: ObjectId('69155dbda33f74f18863b114'),"available":true})
 db.Books.remove({author:"Unknown"})