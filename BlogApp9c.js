//  You are working on a blog application that stores all posts in a collection called posts. Each post has the following fields:
// title
// author
// tags
// publishedDate
// Your task is to:

// Create an index to help quickly find posts by the author field in ascending order.

// Create another index on publishedDate in descending order to quickly sort the latest posts.

// List all indexes present in the posts collection.

// Finally, remove the index on the author field. 
use BookApp
 db.posts.insertMany([
   {
     title: "Getting Started with MongoDB",
     author: "John Doe",
     tags: ["database", "mongodb", "nosql"],
     publishedDate: ISODate("2025-10-10T09:00:00Z")
   },
   {
     title: "A Beginner’s Guide to JavaScript Promises",
     author: "Jane Smith",
     tags: ["javascript", "async", "webdev"],
     publishedDate: ISODate("2025-09-15T12:30:00Z")
   },
   {
     title: "10 Tips to Improve Your CSS Layouts",
     author: "Alice Johnson",
     tags: ["css", "frontend", "design"],
     publishedDate: ISODate("2025-07-20T18:45:00Z")
   },
   {
     title: "Building REST APIs with Node.js and Express",
     author: "Michael Lee",
     tags: ["nodejs", "express", "backend"],
     publishedDate: ISODate("2025-05-05T14:10:00Z")
   },
   {
     title: "How to Secure Your Web Application",
     author: "Sophia Martinez",
     tags: ["security", "webdev", "best-practices"],
     publishedDate: ISODate("2025-03-22T10:00:00Z")
   }
 ])

db.posts.createIndex({author:1})
 db.posts.createIndex({publishedDate:-1})
 db.posts.getIndexes()
  db.posts.dropIndex({author:1})