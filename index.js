var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let obj = 
  { itemName: item,
    itemPrice: 1 + getRandomInt(99)  
  };
 cart.push(item);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  function viewCartAux(name, dollars){
    return `${name} at $${dollars}`;
  }
  function same(msg){
    return `In your cart, you have ${msg}.`
  }
  function indexAux(n){
    let obj = cart[n];
    return viewCartAux(obj.itemName, obj.itemPrice)
  }
  let len = cart.len;
  if (len === 0){
  return "Your shopping cart is empty.";
  }
  if (len === 1){
  return msg(cart[0].itemName);
  }
  if (len === 2){
  return msg();
  }
  if (len >= 3){
  
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
