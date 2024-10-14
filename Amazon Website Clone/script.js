// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
];

// Cart to store selected products
let cart = [];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        updateCartTotal();
    }
}

// Function to calculate total price in cart
function updateCartTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

// Initialize the app
window.onload = function() {
    displayProducts();
};
