async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products/category/smartphones');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
        return null;
    }
}


async function addProducts(title, description, price, category) {
    if (!(title && description && price && category)) {
        return "All fields are required.";
    }
    if (!isFinite(price)) {
        return "Price must be a valid number.";
    }

    try {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, price, category }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error adding product: ${error.message}`);
        return `Error: ${error.message}`;
    }
}

const updateProduct = async (id, category, value) => {
    if (!(id && category && value)) {
        return "All fields are required.";
    }
    if (!["title", "description", "price", "category"].includes(category)) {
        return "Category must be one of title, description, price, or category.";
    }
    if (isNaN(id) || id < 1 || id > 180) {
        return "ID must be a valid number between 1 and 180.";
    }
    if (category === "price" && !isFinite(value)) {
        return "Price must be a valid number.";
    }

    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ [category]: value }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error updating product: ${error.message}`);
        return `Error: ${error.message}`;
    }
};

const deleteProduct = async (id) => {
    if (!id || isNaN(id) || id < 1 || id > 180) {
        return "ID must be a valid number between 1 and 180.";
    }

    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`Error deleting product: ${error.message}`);
        return `Error: ${error.message}`;
    }
};

module.exports = { getProducts, addProducts, updateProduct, deleteProduct };
