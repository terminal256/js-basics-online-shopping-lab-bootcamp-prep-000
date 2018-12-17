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
  return msg(indexAux(0));
  }
  if (len === 2){
  return msg(`${indexAux(0)}, and ${indexAux(1)}`);
  }
  if (len >= 3){
    let end = `and ${indexAux(len)}`;
    let str2 = "";
  for(let i = 0; i < len - 1; i++){
    str2 = `${str2}${indexAux(i)}, `;
  }
  return msg(`${str2}${end}`);
  }
}

function total() {
  let len = cart.length;
  let total = 0;
  for(let i = 0; i < len; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function findItemByName(name){
  let len = cart.length;
  for(let i = 0; i < len; i++){
    if(cart[i].itemName === name){
      return i;
    }
  }
  return null;
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
