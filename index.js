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
    itemprice: 1 + getRandomInt(99)  
  };
 cart.push(item);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let len = cart.len;
  if (len === 0){
  
  }
  if (len === 1){
  
  }
  if (len === 2){
  
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
