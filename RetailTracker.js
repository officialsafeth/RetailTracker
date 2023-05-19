// Sample code for handling retail-based non-securities DLT products using UPC and SKU

// Define a class for the product
class Product {
  constructor(upc, sku, name, price) {
    this.upc = upc; // Universal Product Code
    this.sku = sku; // Stock Keeping Unit
    this.name = name;
    this.price = price;
  }
}

// Create an array to store products
const products = [];

// Function to add a new product
function addProduct(upc, sku, name, price) {
  const newProduct = new Product(upc, sku, name, price);
  products.push(newProduct);
  console.log(`Product added: ${newProduct.name}`);
}

// Function to find a product by SKU
function findProductBySKU(sku) {
  const foundProduct = products.find(product => product.sku === sku);
  if (foundProduct) {
    console.log(`Product found: ${foundProduct.name}`);
  } else {
    console.log('Product not found');
  }
}

// Example usage
addProduct('123456789', 'SKU123', 'Product A', 10.99);
addProduct('987654321', 'SKU456', 'Product B', 19.99);
addProduct('543216789', 'SKU789', 'Product C', 5.99);

findProductBySKU('SKU456');
findProductBySKU('SKU999');
