// You are helping a small tech training company organize student data stored in a MongoDB database called mashupdb. The collection is called students, and it contains information such as student names, marks, and IDs.
// Your tasks:
// Export all student data into a .json file.
// Export only the _id, name, and mark fields into a .csv file.
// Export only the first 4 records into a .json file.
// Export 3 records sorted by _id in ascending order into another .json file.
// Export 6 records, skip the first 2, and sort by _id in ascending order.
// Perform these exports using MongoDB's mongoexport command.

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


  mongoexport --db mashupdb --collection students -type=csv --fields _id,name,mark --out /data/dump/students/students.csv
  mongoexport --db mashupdb --collection students --limit 4  --out /data/dump/sorted3.json;
 mongoexport --db mashupdb --collection students --limit 3 --sort '{_id:1}' --out /data/dump/sortedfile.json;
  mongoexport --db mashupdb --collection students --limit 6 --skip 2 --sort '{_id:1}' --out /data/dump/sorted4.json;