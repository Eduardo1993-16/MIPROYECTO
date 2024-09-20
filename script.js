let cart = [];
let cartCount = 0;
let totalPrice = 0;


// addToCart()

function addToCart(product, price) {
    cart.push({ product, price });
    cartCount++;
    totalPrice += price;
    console.log(cart);
    
    

    document.getElementById('cart-count').textContent = cartCount;

  
    let cartItems = document.getElementById('cart-items');
    let newItem = document.createElement('li')
    let buttonEliminar = document.createElement('button')
    buttonEliminar.textContent = 'X'
    buttonEliminar.classList.add('btn','btn-primary','eliminar');
    newItem.textContent = `${product} - $${price}`;
    cartItems.appendChild(newItem);
    cartItems.appendChild(buttonEliminar)

    const elimiminar = document.querySelector('.eliminar') 
    elimiminar.addEventListener('click',eliminarMoto)
    
    document.getElementById('total-price').textContent = totalPrice;

}
//  boton.parentNode.removeChild(boton.parentNode);

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}


function eliminarMoto(e){
    console.log('en el eliminar');
    const li = e.target.nextSibling
    const {product, price } = cart
    console.log(li);
   console.log(cart);
       
    cartCount--
    totalPrice-=price
 console.log(cart);
 console.log(cartCount);
 
 
  cart = [...cart]
  console.log(cart);
  
}
