//  You are managing a collection of student data in a MongoDB database named mashupdb. The collection is called students. Your goal is to prepare the database for efficient performance and backup. Complete the following tasks in class:
// Create an index on the mark field in ascending order.
// Check which indexes currently exist on the students collection.
// Remove the index on the mark field.
// Export the first 3 student records sorted by _id into a JSON file named sorted3.json
use mashupdb
 db.students.insertMany([
{
     student_id: 1000,
     name: "Rahul Raj",
     age: 24,
     place: "Trivandrum",
     mark: 30
   },
   {
     student_id: 1023,
     name: "Akshay Kumar",
     age: 30,
     place: "Kottayam",
     mark: 90
  },
   {
    student_id: 1033,
     name: "Suresh Raina",
     age: 22,
     place: "Kochi",
     mark: 45
  },
   {
     student_id: 1035,
     name: "Aneesh M",
     age: 25,
     place: "Malappuram",
     mark: 75
   },
   {
     student_id: 2000,
     name: "Shabin SS",
    age: 28,
     place: "Pathanamthitta",
    mark: 63
   },
   {
     student_id: 2023,
     name: "Kajal AK",
     age: 24,
     place: "Kollam",
     mark: 58
   },
  {
     student_id: 2033,
    name: "Sony",
    age: 28,
     place: "Trivandrum",
     mark: 54
 },
  {
     student_id: 2045,
    name: "Vishnu S",
    age: 22,
     place: "Kannnur",
    mark: 61
   },
   {
    student_id: 3023,
     name: "Pranav PS",
     age: 25,
   place: "Kasaragod",
     mark: 33
  },
   {
    student_id: 3033,
     name: "Jyothish SK",
    age: 27,
     place: "Kottayam",
     mark: 94
   },
   {
     student_id: 3045,
     name: "Akhil S",
     age: 28,
    place: "Ernakulam",
     mark: 82
   },
   {
     student_id: 3050,
     name: "Aneesh Krishna",
     age: 21,
     place: "Alappuzha",
     mark: 99
   }
 ])

db.students.createIndex({mark:1})

 db.students.getIndexes()

 db.students.dropIndexes({mark:1})

 mongoexport --db mashupdb --collection students --limit 3 --sort '{_id:1}' --out /data/dump/sorted3.json;