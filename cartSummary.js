/* Challenge: Create a function that, given an array of objects representing products in a shopping cart, calculates the total price of the cart, the total number of products, and the total quantity of products in stock. */

const cart = [
  {name: 'Vegan Salad', price: 30, quantity: 3, stock: 50},
  {name: 'Water', price: 15, quantity: 3, stock: 155},
  {name: 'Vegan Cheesse', price: 70, quantity: 1, stock: 118}
]

const CartSummary = (cart) => {
  let totalPrice = 0;
  let totalQuantity = 0;
  let totalStock = 0;
     for (const product of cart){
       totalPrice += product.price * product.quantity;
       totalQuantity += product.quantity;
       totalStock += product.stock;
     }
        return {
           totalPrice: totalPrice,
           totalQuantity: totalQuantity,
           totalStock: totalStock,
        }
}
console.log(CartSummary(cart));