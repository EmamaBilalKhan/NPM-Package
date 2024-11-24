# Products-Emama-Bilal

`products-emama-bilal` is an npm package for performing HTTP methods (GET, POST, PUT, DELETE) on products using the [DummyJSON API](https://dummyjson.com/). This package was developed as part of Web Technologies coursework.

## Features

- Fetch products in the "smartphones" category.
- Add new products to the DummyJSON API.
- Update specific product properties like `title`, `description`, `price`, or `category`.
- Delete products by ID.

## Installation

You can install the package via npm:

```bash
npm install products-emama-bilal
```

## Usage

**Import the package**

To use the package, import the functions into your project:

```js
const { getProducts, addProducts, updateProduct, deleteProduct } = require('products-emama-bilal');
```

**Fetch Products**

Use the getProducts() function to fetch all products in the "smartphones" category.

```js
getProducts()
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching products:", error));
```

**Add a new Product**

Use the addProducts(title, description, price, category) function to add a new product.

**Parameters:**
* **title (string):** The name of the product.
* **description (string):** A brief description of the product.
* **price (number):** The price of the product.
* **category (string):** The category of the product.

```js
addProducts("Realme Phone", "A budget-friendly smartphone", 150, "smartphones")
  .then((data) => console.log("Product added:", data))
  .catch((error) => console.error("Error adding product:", error));
```

**Update a Product**

Use the updateProduct(id, category, value) function to update a specific field of a product by its ID.

**Parameters:**
* **id (number):** The id of the product. Valid values : Between 1 and 180
* **category (string):** The category of the product to be updated. Valid values: category, price,  title, description
* **value (string || number):** The value of the category. Valid values: category (string), price (number), title (string), description (string)

```js
updateProduct(2, "title", "Updated Smartphone Name")
  .then((data) => console.log("Product updated:", data))
  .catch((error) => console.error("Error updating product:", error));
```

**Delete a Product**

Use the deleteProduct(id) function to delete a specific product by its ID.

**Parameters:**
* **id (number):** The id of the product. Valid values : Between 1 and 180

```js
deleteProduct(2)
  .then((data) => console.log("Product deleted:", data))
  .catch((error) => console.error("Error deleting product:", error));
```

### Author

**Emama Bilal Khan**
Software Engineering Student, COMSATS University, Lahore.

Feel free to reach out for any questions or suggestions!


