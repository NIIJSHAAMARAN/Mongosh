// You are helping a startup set up a basic employee records system. Your task is to create a database to store employee details.
// Complete the following steps:
// Create a new database called CompanyDB.
// Create a collection named Employees.
// Insert one employee record using insertOne() with the following details:
// name: "Ravi Kumar"
// age: 28
// isActive: true
// salary: 45000.50
// skills: ["JavaScript", "Node.js", "MongoDB"]
// contact: an object with email: "ravi@example.com" and phone: "9876543210"
// joinedDate: today’s date
// managerAssigned: null
// Insert three more employee records at once using insertMany() with sample data of your choice. Make sure to use at least 5 different data types in each record.


use CompanyDB
 var skills=["JavaScript", "Node.js", "MongoDB"]
 var contact={"email":"ravi@example.com","phone": "9876543210"}
 var date=new Date()
 db.Employees.insertOne({name:"Ravi Kumar",age:28,isActive:true,saCompanyDB> db.Employees.insertOne({name:"Ravi Kumar",age:28,isActive:true,salary:45000.50,skills:skills,contact:contact,joinedDate:date,managerAssigned:null})
db.Employees.find().pretty()
 var contact={"email":"gopu@example.com","phone": "9878986509"}
 var contact2={"email":"meenu@gmail.com","phone":6578321211}
 var contact3={"email":"ameer@example.com",phone:6999932560}
 var contact4={"email":"jeena@gmail.com",phone:9123568989}
 var contact5={email:"lakshmi@gmail.com",phone:5665323313}
 
CompanyDB>  db.Employees.insertMany([{name:"Gopu",age:25,isActive:true,salary:30000,skills:skills,contact:contact,joinedDate:date,managerAssigned:null},{name:"Meenu",age:35,isActive:true,salary:50000,skills:skills,contact:contact2,joinedDate:date,managerAssigned:null},{name:"Ameer",age:27,isActive:true,salary:30000,skills:skills,contact:contact3,joinedDate:date,managerAssigned:null},{name:"Jeena",age:22,isActive:true,salary:35000,skills:skills,contact:contact4,joinedDate:date,managerAssigned:null},{name:"Lakshmi",age:28,isActive:true,salary:28000,skills:skills,contact:contact5,joinedDate:date,managerAssigned:null}])
 db.Employees.find().pretty()