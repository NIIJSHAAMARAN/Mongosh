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