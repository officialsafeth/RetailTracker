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

// Handle the form submission for adding a product

const addProductForm = document.getElementById('addProductForm');

addProductForm.addEventListener('submit', function (event) {

  event.preventDefault();

  const upc = document.getElementById('upcInput').value;

  const sku = document.getElementById('skuInput').value;

  const name = document.getElementById('nameInput').value

