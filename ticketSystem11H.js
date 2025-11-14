// You are working on a support ticket system for a small company. The system stores user-submitted tickets in a MongoDB collection named tickets. Each ticket contains fields like subject, description, and createdAt.
// Your tasks:
// Make the tickets searchable by both the subject and description fields (for example, allow support agents to search for keywords like “error” or “payment failed”).
// Verify that the correct type of index was created.
// Perform a search for tickets that mention the word “error”.
// Finally, remove the search functionality after testing (delete the index)
db.tickets.insertMany([
  {
    subject: "Payment failed while processing order",
    description: "User reports an error during the payment gateway processing.",
    createdAt: new Date()
  },
  {
    subject: "Login error",
    description: "User cannot log into the system. Error: Invalid session token.",
    createdAt: new Date()
  },
  {
    subject: "Feature request for dark mode",
    description: "No errors reported, user wants a dark mode feature.",
    createdAt: new Date()
  },
  {
    subject: "App crash on startup",
    description: "The application shows unknown error and closes automatically.",
    createdAt: new Date()
  }
])

db.tickets.createIndex({subject:"text",description:"text"})
db.tickets.getIndexes()
db.tickets.find({$text:{$search:"error"}}).pretty()
db.tickets.find({$text:{$search:"payment failed"}}).pretty()
db.tickets.dropIndex("subject_text_description_text")
