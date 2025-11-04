// You are helping a local event planner keep track of upcoming events. Your task is to set up a MongoDB system that stores different types of information about each event.
// Complete the following steps:
// Create a new database called EventTracker.
// Inside it, create a collection named UpcomingEvents.
// Insert one event document using insertOne() with the following data:
// name: "Music Fest" (text)
// date: use the current date
// isFreeEntry: false
// ticketPrice: 299.99
// performers: ["DJ Max", "Live Band"]
// location: an object with city: "Chennai" and venue: "Beach Arena"
// specialCode: null
// Insert two more events at once using insertMany(). Use your own sample data.
// Use show collections to check the collection.
// Use db.UpcomingEvents.find() to display all event documents.



use EventTracker
 var date1=Date()
 var location={city:"Chennai",venue:"Beach Arena"}
 db.UpcomingEvents.insertOne({name:"Music Fest(text)",date:date1,isFreeEntry: false,ticketPrice: 299.99,performers: ["DJ Max", "Live Band"],location:location,specialCode: null})
  db.UpcomingEvents.find().pretty()
  var date1=new Date()
var date2=Date()
var date3=new ISODate()
db.dateCollection.insertMany([{Today:date1},{secondType:date2},{ThirdDate:date3}])
db.dateCollection.find().pretty()