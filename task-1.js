function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Test örnekleri:
console.log(makeTransaction(3, 800));   // "You ordered 3 droids worth 2400 credits!"
console.log(makeTransaction(5, 1200));  // "You ordered 5 droids worth 6000 credits!"
