const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total');
let cart = [];
let totalPrice = 0;

const menuItems = [
    { name: 'Créme Brûlée French Toast', price: 18.00 },
    { name: 'Classic Breakfast Sandwich', price: 9.00 },
    { name: 'Red Velvet Pancakes', price: 18.00 }
];


document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(menuItems[index]);
    });
});

function addToCart(item) {
    cart.push(item);
    totalPrice += item.price;
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
    });
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Clear the cart when the "Checkout" button is clicked
document.getElementById('checkout').addEventListener('click', () => {
    alert(`Your total is $${totalPrice.toFixed(2)}. Thank you for your order!`);
    cart = [];
    totalPrice = 0;
    updateCart();
});

function opencart() {
    document.getElementById("cart").style.width = "500px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closenav() {
    document.getElementById("cart").style.width = "0";
  }
