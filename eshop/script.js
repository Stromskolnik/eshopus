const shoppingCart = [];

function addItemToCart(itemId, itemName, itemPrice) {
  const item = {
    id: itemId,
    name: itemName,
    price: itemPrice,
  };

  if (shoppingCart[itemId]) {
    shoppingCart[itemId]++;
  } else {
    shoppingCart[itemId] = 1;
  }

  shoppingCart.push(item);
  const totalPrice = calculateTotalPrice();
  displayCart();
  displayTotalPrice(totalPrice);
  console.log(JSON.stringify(shoppingCart));
  console.log(totalPrice);
  console.log(`Added item ${itemId} to cart. Total quantity: ${shoppingCart[itemId]}`);
}

function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
  }
  return totalPrice;
}

function displayCart() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';

  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(listItem);
  }
}

function displayTotalPrice(totalPrice) {
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

displayCart();
displayTotalPrice(0);  
