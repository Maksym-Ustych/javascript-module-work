function processProducts(products) {
  const availableProducts = products.filter(product => product.inStock === true);

  const available = availableProducts.map(product => product.name);

  const totalPrice = availableProducts.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  let cheapest = null;

  if (availableProducts.length > 0) {
    cheapest = availableProducts.reduce((min, product) => {
      return product.price < min.price ? product : min;
    }).name;
  }

  const priceList = products.map(product => {
    return `${product.name} — ${product.price} грн`;
  });

  return {
    available: available,
    totalPrice: totalPrice,
    cheapest: cheapest,
    priceList: priceList
  };
}

const products = [
  { name: "Чай", price: 50, inStock: true },
  { name: "Кава", price: 120, inStock: false },
  { name: "Цукор", price: 30, inStock: true }
];

console.log(processProducts(products));