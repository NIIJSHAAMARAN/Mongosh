// You are managing a database of employees in a company. The collection is named employees. Each employee document contains:

// name (string)
// department (string)
// salary (number)
// email (string)
// Insert the sample data
// db.employees.insertMany([
//     { name: "Alice Johnson", department: "Engineering", salary: 75000, email: "alice.johnson@company.com" },
//     { name: "Bob Smith", department: "Marketing", salary: 65000, email: "bob.smith@company.com" },
//     { name: "Charlie Brown", department: "Engineering", salary: 80000, email: "charlie.brown@company.com" },
//     { name: "Diana Lee", department: "HR", salary: 60000, email: "diana.lee@company.com" },
//     { name: "Emma Davis", department: "Sales", salary: 70000, email: "emma.davis@company.com" },
//     { name: "Frank Wilson", department: "Engineering", salary: 82000, email: "frank.wilson@company.com" },
//     { name: "Grace Kim", department: "Marketing", salary: 68000, email: "grace.kim@company.com" },
//     { name: "Henry Chen", department: "HR", salary: 62000, email: "henry.chen@company.com" }
// ]);
// Your task is to write queries that:
// Show only the name and department of all employees, hiding the _id field.
// Display the first 4 employees with all their details.
// Skip the first 2 employees and show the next 3 employees with only their name and salary.
// Skip the first 5 employees and show the next 2 employees with just the name and email.
use company
db.employees.insertMany([
    { name: "Alice Johnson", department: "Engineering", salary: 75000, email: "alice.johnson@company.com" },
    { name: "Bob Smith", department: "Marketing", salary: 65000, email: "bob.smith@company.com" },
    { name: "Charlie Brown", department: "Engineering", salary: 80000, email: "charlie.brown@company.com" },
    { name: "Diana Lee", department: "HR", salary: 60000, email: "diana.lee@company.com" },
    { name: "Emma Davis", department: "Sales", salary: 70000, email: "emma.davis@company.com" },
    { name: "Frank Wilson", department: "Engineering", salary: 82000, email: "frank.wilson@company.com" },
    { name: "Grace Kim", department: "Marketing", salary: 68000, email: "grace.kim@company.com" },
    { name: "Henry Chen", department: "HR", salary: 62000, email: "henry.chen@company.com" }
]);

db.employees.find({},{_id:0,name:1,department:1})
db.employees.find().limit(4).pretty()
 db.employees.find({},{_id:0,name:1,salary:1}).limit(3).skip(2).pretty()
 b.employees.find({},{_id:0,name:1,email:1}).limit(2).skip(5).pretty()