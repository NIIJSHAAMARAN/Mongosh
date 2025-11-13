// You are helping build a small online store that keeps track of product listings in a MongoDB collection called products. Each product document has the following structure:

// {
//   "name": "Laptop",
//   "category": "Electronics",
//   "price": 800,
//   "stock": 15
// }

// Your task is to:
// Create an index on the category field to help quickly filter products by their category.
// Create an index on the price field in descending order to allow sorting the most expensive products first.
// View all indexes in the products collection.
// Remove the index on the category field when it's no longer needed
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
 db.Products.createIndex({category:1})
  db.Products.createIndex({price:-1})
 db.Products.getIndexes()
 db.Products.dropIndex({category:1})