// You are managing a database for a small online clothing store with a collection named Clothes. Each document contains the following fields:
// name (string)
// category (string, e.g., "Shirt", "Pants")
// price (double)
// stock (integer)
// discount (boolean)
// Insert sample data:
// db.Clothes.insertMany([
//     { name: "Denim Jeans", category: "Pants", price: 599.99, stock: 20, discount: true },
//     { name: "Cotton T-Shirt", category: "Shirt", price: 199.99, stock: 15, discount: false },
//     { name: "Leather Jacket", category: "Jacket", price: 999.99, stock: 5, discount: true },
//     { name: "Formal Shirt", category: "Shirt", price: 349.99, stock: 12, discount: true },
//     { name: "Cargo Pants", category: "Pants", price: 499.99, stock: 8, discount: false },
//     { name: "Wool Sweater", category: "Sweater", price: 699.99, stock: 10, discount: true },
//     { name: "Casual Shorts", category: "Shorts", price: 249.99, stock: 25, discount: true },
//     { name: "Silk Scarf", category: "Accessories", price: 149.99, stock: 0, discount: false },
//     { name: "Hooded Sweatshirt", category: "Sweater", price: 399.99, stock: 18, discount: true },
//     { name: "Chinos", category: "Pants", price: 299.99, stock: 11, discount: false }
// ]);
// Your tasks are:
// Find and neatly display all clothes priced greater than 500.
// Find one clothing item that belongs to the "Shirt" category.
// Find all clothes with a price less than or equal to 300 AND stock greater than 10.
// Find all clothes that are either priced less than 200 OR have a discount available.
// Update the stock of the clothing item named "Denim Jeans" to 50 using the update() method.
// Update the price of the clothing item named "Leather Jacket" to 1200 by first retrieving it and then using the save() method.
// Remove one document where the stock is exactly 0.

use onlineClothingStore
db.Clothes.insertMany([
    { name: "Denim Jeans", category: "Pants", price: 599.99, stock: 20, discount: true },
    { name: "Cotton T-Shirt", category: "Shirt", price: 199.99, stock: 15, discount: false },
    { name: "Leather Jacket", category: "Jacket", price: 999.99, stock: 5, discount: true },
    { name: "Formal Shirt", category: "Shirt", price: 349.99, stock: 12, discount: true },
    { name: "Cargo Pants", category: "Pants", price: 499.99, stock: 8, discount: false },
    { name: "Wool Sweater", category: "Sweater", price: 699.99, stock: 10, discount: true },
    { name: "Casual Shorts", category: "Shorts", price: 249.99, stock: 25, discount: true },
    { name: "Silk Scarf", category: "Accessories", price: 149.99, stock: 0, discount: false },
    { name: "Hooded Sweatshirt", category: "Sweater", price: 399.99, stock: 18, discount: true },
    { name: "Chinos", category: "Pants", price: 299.99, stock: 11, discount: false }
]);
 db.Clothes.find({"price":{$gt:500}}).pretty()

 db.Clothes.findOne({category:"Shirt"})
 db.Clothes.find({$and:[{price:{$lte:300}},{stock:{$gt:10}}]}).pretty()
  db.Clothes.find({$or:[{price:{$lt:200}},{discount:true}]}).pretty()
  db.Clothes.update({name:"Denim Jeans"},{$set:{stock:50}})
  db.Clothes.find({name:"Leather Jacket"})
db.Clothes.save({_id:ObjectId('6914152d83cb460e9a63b114'),price:1200})
db.Clothes.remove({stock:0})
