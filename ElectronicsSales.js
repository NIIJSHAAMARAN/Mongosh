// You are managing a MongoDB collection named sales for an online electronics store. Each document in the collection has these fields:
// product (string)
// category (string)
// price (number)
// quantity (number)
// date (ISODate)
// db.sales.insertMany([
//     { product: "Dell XPS 13", category: "Laptops", price: 1299.99, quantity: 2, date: ISODate("2025-07-01T08:00:00Z") },
//     { product: "MacBook Air", category: "Laptops", price: 999.99, quantity: 3, date: ISODate("2025-07-02T10:30:00Z") },
//     { product: "Wireless Mouse", category: "Accessories", price: 29.99, quantity: 5, date: ISODate("2025-07-02T12:00:00Z") },
//     { product: "HP Spectre x360", category: "Laptops", price: 1499.99, quantity: 1, date: ISODate("2025-07-03T14:15:00Z") },
//     { product: "MacBook Air", category: "Laptops", price: 1099.99, quantity: 2, date: ISODate("2025-07-04T09:45:00Z") },
//     { product: "Smartphone Pro", category: "Smartphones", price: 999.99, quantity: 2, date: ISODate("2025-07-04T11:20:00Z") },
//     { product: "Dell XPS 13", category: "Laptops", price: 1249.99, quantity: 4, date: ISODate("2025-07-05T13:50:00Z") },
//     { product: "Bluetooth Headphones", category: "Accessories", price: 89.99, quantity: 3, date: ISODate("2025-07-05T15:30:00Z") },
//     { product: "MacBook Air", category: "Laptops", price: 1049.99, quantity: 1, date: ISODate("2025-07-06T10:00:00Z") },
//     { product: "HP Spectre x360", category: "Laptops", price: 1399.99, quantity: 2, date: ISODate("2025-07-07T11:00:00Z") }
// ]);
// Your tasks:
// Find all sales records for the category "laptops" only.
// Group the sales by product and calculate the total quantity sold for each product.
// For each product, calculate the average price it was sold for.
// Sort the results by total quantity sold in descending order.
// Add a new field to each result showing the total revenue generated for each product (price * quantity).
// Output the final results to a new collection named laptop_sales_summary.

ProductStore> db.sales.insertMany([
     { product: "Dell XPS 13", category: "Laptops", price: 1299.99, quantquantity: 2, date: ISODate("2025-07-01T08:00:00Z") },
     { product: "MacBook Air", category: "Laptops", price: 999.99, quantiquantity: 3, date: ISODate("2025-07-02T10:30:00Z") },
     { product: "Wireless Mouse", category: "Accessories", price: 29.99, quantity: 5, date: ISODate("2025-07-02T12:00:00Z") },
     { product: "HP Spectre x360", category: "Laptops", price: 1499.99, qquantity: 1, date: ISODate("2025-07-03T14:15:00Z") },
     { product: "MacBook Air", category: "Laptops", price: 1099.99, quantquantity: 2, date: ISODate("2025-07-04T09:45:00Z") },
     { product: "Smartphone Pro", category: "Smartphones", price: 999.99, quantity: 2, date: ISODate("2025-07-04T11:20:00Z") },
     { product: "Dell XPS 13", category: "Laptops", price: 1249.99, quantquantity: 4, date: ISODate("2025-07-05T13:50:00Z") },
     { product: "Bluetooth Headphones", category: "Accessories", price: 89.99, quantity: 3, date: ISODate("2025-07-05T15:30:00Z") },
     { product: "MacBook Air", category: "Laptops", price: 1049.99, quantquantity: 1, date: ISODate("2025-07-06T10:00:00Z") },
    { product: "HP Spectre x360", category: "Laptops", price: 1399.99, qquantity: 2, date: ISODate("2025-07-07T11:00:00Z") }
]);
db.sales.aggregate([{$match:{category:"Laptops"}}])
db.sales.aggregate([{$group:{_id:"$product",totalQuantity:{$sum:"$quantity"}}}])
db.sales.aggregate([{$group:{_id:"$product",totalQuantity:{$sum:"$quantity"},avgPrice:{$avg:"$price"},totalRevenge:{$sum:{$multiply:["$price","$quantity"]}}}}])
db.sales.aggregate([{$group:{_id:"$product",totalQuantity:{$sum:"$quantity"},avgPrice:{$avg:"$price"}}},{$sort:{totalQuantity:-1}}])
 db.sales.aggregate([{$group:{_id:"$product",totalQuantity:{$sum:"$quantity"},avgPrice:{$avg:"$price"},totalRevenue:{$sum:{$multiply:["$price","$quantity"]}}}}])
 db.sales.aggregate([{$group:{_id:"$product",totalQuantity:{$sum:"$quantity"},avgPrice:{$avg:"$price"},totalRevenue:{$sum:{$multiply:["$price","$quantity"]}}}},{$out:"laptop_sales_summary"}])
 db.laptop_sales_summary.find().pretty()