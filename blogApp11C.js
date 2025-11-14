// You are working on a blog application that stores articles in a MongoDB collection named posts. Your task is to make searching articles by their content faster. Follow these steps:
// Create a text index on the title and content fields in the posts collection.
// Search for articles that contain the word “mongodb”.
// List all the indexes to confirm the text index was created.
// Delete the text index once you’re done
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
db.posts.createIndex({title:"text",content:"text"})
 db.posts.find({$text:{$search:"mongodb"}}).pretty()
  db.posts.getIndexes()
  db.posts.dropIndex("title_text_content_text")
