// You work for an online electronics store that keeps a record of its products in a database. Your task is to retrieve specific product information based on different search criteria to help the sales team.
// Using a collection named Products with fields such as:
// productName (string)
// category (string)
// price (double)
// stock (integer)
// discountAvailable (boolean)
// Insert sample data
// db.Products.insertMany([
//     { productName: "Galaxy S21", category: "Smartphones", price: 799.99, stock: 10, discountAvailable: true },
//     { productName: "iPhone 13", category: "Smartphones", price: 999.99, stock: 8, discountAvailable: false },
//     { productName: "Dell XPS 13", category: "Laptops", price: 1299.99, stock: 6, discountAvailable: true },
//     { productName: "HP Spectre x360", category: "Laptops", price: 1499.99, stock: 3, discountAvailable: false },
//     { productName: "Sony Headphones", category: "Accessories", price: 199.99, stock: 15, discountAvailable: true },
//     { productName: "Logitech Mouse", category: "Accessories", price: 49.99, stock: 20, discountAvailable: true },
//     { productName: "MacBook Air", category: "Laptops", price: 999.99, stock: 7, discountAvailable: true },
//     { productName: "Samsung Tablet", category: "Tablets", price: 299.99, stock: 12, discountAvailable: false },
//     { productName: "Smart Watch", category: "Wearables", price: 249.99, stock: 5, discountAvailable: true },
//     { productName: "Gaming Monitor", category: "Monitors", price: 399.99, stock: 4, discountAvailable: false }
// ]); 
 
 use ElectronicsStore
  db.Products.insertMany([
    { productName: "Galaxy S21", category: "Smartphones", price: 799.99, stock: 10, discdiscountAvailable: true },
    { productName: "iPhone 13", category: "Smartphones", price: 999.99, stock: 8, discoudiscountAvailable: false },
    { productName: "Dell XPS 13", category: "Laptops", price: 1299.99, stock: 6, discoundiscountAvailable: true },
    { productName: "HP Spectre x360", category: "Laptops", price: 1499.99, stock: 3, disdiscountAvailable: false },
    { productName: "Sony Headphones", category: "Accessories", price: 199.99, stock: 15, discountAvailable: true },
    { productName: "Logitech Mouse", category: "Accessories", price: 49.99, stock: 20, ddiscountAvailable: true },
    { productName: "MacBook Air", category: "Laptops", price: 999.99, stock: 7, discountdiscountAvailable: true },
    { productName: "Samsung Tablet", category: "Tablets", price: 299.99, stock: 12, discdiscountAvailable: false },    { productName: "Smart Watch", category: "Wearables", price: 249.99, stock: 5, discoudiscountAvailable: true },
    { productName: "Gaming Monitor", category: "Monitors", price: 399.99, stock: 4, discdiscountAvailable: false }
 ]);
 db.Products.find({price:{$lt:1000}})
 db.Products.find({category:"Smartphones"})
 db.Products.find({$and:[{category:"Laptops"},{stock:{$gte:5}}]}).pretty()
db.Products.find({$or:[{price:{$lt:300}},{discountAvailable:true}]}).pretty()
 db.Products.find({price:{$ne:1500}}).pretty()

  