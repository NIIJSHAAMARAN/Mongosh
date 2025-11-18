// You are working on a small online bookstore database. The books collection contains documents with the following fields:
// title (string)
// author (string)
// price (number)
// rating (number)
// genre (string)
// db.books.insertMany([
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, rating: 4.3, genre: "Fiction" },
//     { title: "1984", author: "George Orwell", price: 9.99, rating: 4.8, genre: "Dystopian" },
//     { title: "Pride and Prejudice", author: "Jane Austen", price: 7.99, rating: 4.6, genre: "Romance" },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.99, rating: 4.9, genre: "Fantasy" },
//     { title: "Sapiens", author: "Yuval Noah Harari", price: 18.99, rating: 4.7, genre: "Non-Fiction" },
//     { title: "The Da Vinci Code", author: "Dan Brown", price: 11.99, rating: 4.2, genre: "Mystery" },
//     { title: "Dune", author: "Frank Herbert", price: 15.99, rating: 4.8, genre: "Science Fiction" },
//     { title: "The Alchemist", author: "Paulo Coelho", price: 10.99, rating: 4.4, genre: "Fiction" },
//     { title: "Educated", author: "Tara Westover", price: 13.99, rating: 4.7, genre: "Non-Fiction" },
//     { title: "The Night Circus", author: "Erin Morgenstern", price: 16.99, rating: 4.5, genre: "Fantasy" }
// ]);
// Your tasks:
// Write a query to list only the title and author of all books, hiding the _id.
// Find the top 5 books with the highest rating, showing their title, author, and rating.
// Skip the first 3 books sorted by price (lowest to highest), and show the next 4 books with only their title and price.
// Find all unique genres available in the bookstore.
// Use a simple map-reduce function to calculate the total number of books for each genre.
 use BookStore
 db.books.find({},{_id:0,title:1,author:1})
db.books.find({},{_id:0,title:1,author:1,rating:1}).sort({rating:-1}).limit(5)
 db.books.find({},{_id:0,title:1,price:1}).limit(4).skip(3).sort({price:1})
 db.books.distinct("genre")
 var mapFn=function(){emit(this.genre,1)}
 var reduceFn=function(key,values){return Array.sum(values)}
  db.books.mapReduce(mapFn,reduceFn,{out:"genre_count"})
  db.genre_count.find().pretty()