class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

Product.prototype.displayDetailsOfProduct = function () {
  console.log(
    `The name of the product is: ${this.name}, Its price is ${this.price}, Its quantity is ${this.quantity}`
  );
};

Product.prototype.calculateTotal = function(){
  const totalAmount = `${
    this.price * this.quantity
  } is the the total amount for the ${this.name}`;
  return totalAmount;
};

const product1 = new Product("Pen", 10, 5);

product1.displayDetailsOfProduct();
console.log(product1.calculateTotal());

