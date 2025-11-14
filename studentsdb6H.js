// You manage a student database called students with documents containing the fields:

// name (string)
// age (integer)
// grade (string)
// email (string)
// Insert the sample data
// db.students.insertMany([
//     { name: "Sarah Johnson", age: 20, grade: "A", email: "sarah.johnson@university.com" },
//     { name: "Michael Chen", age: 19, grade: "B+", email: "michael.chen@university.com" },
//     { name: "Emily Davis", age: 21, grade: "A-", email: "emily.davis@university.com" },
//     { name: "James Wilson", age: 22, grade: "B", email: "james.wilson@university.com" },
//     { name: "Olivia Brown", age: 20, grade: "A", email: "olivia.brown@university.com" },
//     { name: "Liam Taylor", age: 23, grade: "C+", email: "liam.taylor@university.com" },
//     { name: "Sophia Lee", age: 19, grade: "A-", email: "sophia.lee@university.com" },
//     { name: "Noah Martinez", age: 21, grade: "B", email: "noah.martinez@university.com" },
//     { name: "Ava Kim", age: 20, grade: "A+", email: "ava.kim@university.com" },
//     { name: "Ethan Patel", age: 22, grade: "B-", email: "ethan.patel@university.com" }
// ]);
// Your tasks:
// Retrieve only the names and emails of all students, excluding the _id field.
// Get the first 5 students (any order) with their full details.
// Skip the first 3 students and then show the next 4 students with only their name and grade fields.
// Combine skipping and limiting to display 3 students starting from the 6th student, showing only their name and email
use studentsDb
db.students.insertMany([
    { name: "Sarah Johnson", age: 20, grade: "A", email: "sarah.johnson@university.com" },
    { name: "Michael Chen", age: 19, grade: "B+", email: "michael.chen@university.com" },
    { name: "Emily Davis", age: 21, grade: "A-", email: "emily.davis@university.com" },
    { name: "James Wilson", age: 22, grade: "B", email: "james.wilson@university.com" },
    { name: "Olivia Brown", age: 20, grade: "A", email: "olivia.brown@university.com" },
    { name: "Liam Taylor", age: 23, grade: "C+", email: "liam.taylor@university.com" },
    { name: "Sophia Lee", age: 19, grade: "A-", email: "sophia.lee@university.com" },
    { name: "Noah Martinez", age: 21, grade: "B", email: "noah.martinez@university.com" },
    { name: "Ava Kim", age: 20, grade: "A+", email: "ava.kim@university.com" },
    { name: "Ethan Patel", age: 22, grade: "B-", email: "ethan.patel@university.com" }
]);
db.students.find({},{_id:0,name:1,email:1}).pretty()
db.students.find().limit(5).pretty()
 db.students.find({},{_id:0,name:1,grade:1}).skip(3).limit(4).pretty()
 db.students.find({},{_id:0,name:1,email:1}).skip(5).limit(3).pretty()