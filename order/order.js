let checkout_modal = document.getElementById('checkout');
let cart_view = document.getElementById('cart');
let total_view = document.getElementById('total');
let cart = {};

function addToCart(name, price){
    if(name in cart){
        cart[name][2]+=1

    } else {
        cart[name] = [name,price, 1]
    }
}

function toggleCartView() {
    cart_view.innerHTML = ""
    total_view.innerHTML =""
    checkout_modal.classList.toggle("active")
    let total = 0
    if (Object.values(cart).length == 0) {
        cart_view.innerHTML = "Nothing In Cart, add some items to get started!"
    } else {
        for (key in cart) {
            let name = cart[key][0]
            let price = cart[key][1]
            let quantity = cart[key][2]
            total += price*quantity
            cart_view.innerHTML += ` 
                <li><div class="name">${name}</div><div class="price">${price.toFixed(2)}(${quantity})</div></li>
            `
        }
        total_view.innerHTML +=  `
            <li><div class=name><b>Total: </b></div><div class="price">$${total.toFixed(2)}</div></li>
        `
    }
}   

function completeOrder() {
    if (Object.values(cart).length == 0) {
        alert("Add some items before you checkout")
    } else {
        alert("Thanks for your order!")
        cart={};
        total = 0;
    }
}



