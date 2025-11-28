db.employee.insertMany([
  { id: 1, name: "raju", department: "sales", leave: 1 },
  { id: 2, name: "sangeetha", department: "sales", leave: 3 },
  { id: 3, name: "vinay", department: "operations", leave: 8 },
  { id: 4, name: "abey", department: "packing", leave: 2 },
  { id: 5, name: "thomas", department: "packing", leave: 1 },
  { id: 6, name: "muneer", department: "operations", leave: 7 },
  { id: 7, name: "aparna", department: "sales", leave: 3 },
  { id: 8, name: "abid", department: "operations", leave: 9 },
  { id: 9, name: "fathima", department: "sales", leave: 11 },
  { id: 10, name: "varghese", department: "operations", leave: 14 }
])

db.exam.insertMany([
   { id: 1, employee_id: 2, exam_status: "pass" },
   { id: 2, employee_id: 5, exam_status: "fail" },
   { id: 3, employee_id: 1, exam_status: "fail" },
   { id: 4, employee_id: 8, exam_status: "pass" },
   { id: 5, employee_id: 3, exam_status: "pass" },
   { id: 6, employee_id: 1, exam_status: "pass" },
   { id: 7, employee_id: 6, exam_status: "fail" },
   { id: 8, employee_id: 9, exam_status: "pass" },
   { id: 9, employee_id: 10, exam_status: "pass" }
])

db.employee.find({$and:[{leave:{$gt:5}},{department:"sales"}]}).pretty()
db.employee.aggregate([{$match:{department:"operations"}},{$count:"operationsEmployees"}])
db.employee.aggregate([{$group:{_id:"$department",count:{$sum:1}}}])
db.employee.aggregate([{$group:{_id:"department",totalEmployees:{$count:{}}}}])
db.employee.aggregate([{$group:{_id:"$department",totalLeaves:{$sum:"$leave"}}},{$match:{totalLeaves:{$gt:10}}}])

db.exam.aggregate([{$match:{exam_status:"pass"}},{$lookup:{from:"employee",localField:"id",foreignField:"employee_id",as:"employee_info"}},{$unwind:"$employee_info"},{$project:{_id:0,employee_name:"$employee_info.name"}}])
db.employee.aggregate([{$lookup:{
       from: "exam",
       localField: "id",
       foreignField: "employee_id",
       as: "exam_info"}},
   {$match: { exam_info: { $size: 0 } }},
   {$project: {_id: 0,name: 1}}])