// You have a collection named products storing information about items in an online store. Each document has these fields:
// name (string)
// category (string)
// price (number)
// rating (number)
// Insert the sample data
// db.products.insertMany([
//     { name: "Wireless Mouse", category: "Accessories", price: 29.99, rating: 4.2 },
//     { name: "Gaming Laptop", category: "Laptops", price: 1499.99, rating: 4.8 },
//     { name: "Smartphone Pro", category: "Smartphones", price: 999.99, rating: 4.5 },
//     { name: "Bluetooth Headphones", category: "Accessories", price: 89.99, rating: 4.3 },
//     { name: "4K Monitor", category: "Monitors", price: 399.99, rating: 4.6 },
//     { name: "Tablet X", category: "Tablets", price: 299.99, rating: 4.1 },
//     { name: "Smart Watch", category: "Wearables", price: 199.99, rating: 4.4 },
//     { name: "Desktop PC", category: "Desktops", price: 1299.99, rating: 4.7 },
//     { name: "Wireless Keyboard", category: "Accessories", price: 49.99, rating: 4.0 },
//     { name: "UltraBook", category: "Laptops", price: 1099.99, rating: 4.9 }
// ]);
// Your task is to write MongoDB queries to:
// Show only the name and price of all products, hiding the _id.
// Find the top 3 most expensive products and show their name, price, and category.
// Skip the first 5 products sorted by rating (highest to lowest), and display the next 4 products with just their name and rating.
// List all distinct categories available in the products collection.
use productsDB
db.products.insertMany([
    { name: "Wireless Mouse", category: "Accessories", price: 29.99, rating: 4.2 },
    { name: "Gaming Laptop", category: "Laptops", price: 1499.99, rating: 4.8 },
    { name: "Smartphone Pro", category: "Smartphones", price: 999.99, rating: 4.5 },
    { name: "Bluetooth Headphones", category: "Accessories", price: 89.99, rating: 4.3 },
    { name: "4K Monitor", category: "Monitors", price: 399.99, rating: 4.6 },
    { name: "Tablet X", category: "Tablets", price: 299.99, rating: 4.1 },
    { name: "Smart Watch", category: "Wearables", price: 199.99, rating: 4.4 },
    { name: "Desktop PC", category: "Desktops", price: 1299.99, rating: 4.7 },
    { name: "Wireless Keyboard", category: "Accessories", price: 49.99, rating: 4.0 },
    { name: "UltraBook", category: "Laptops", price: 1099.99, rating: 4.9 }
    ]);
     db.products.find({},{_id:0,name:1,price:1});
     db.products.find({},{ _id: 0, name: 1, price: 1, category: 1 }).sort({ price: -1 }).limit(3);
    db.products.find({},{ _id: 0, name: 1, rating: 1 }).sort({ rating: -1 }).skip(5).limit(4);
    db.products.distinct("category");

