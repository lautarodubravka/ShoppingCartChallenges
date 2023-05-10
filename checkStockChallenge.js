/*Challenge 3: Create a function to check if there is enough stock of the products 
in the shopping cart and update the stock quantity after the purchase is made.*/

const cart = [
    {name: 'Vegan Salad', price: 30, discount: 0.2, quantity: 3, stock: 50},
    {name: 'Water', price: 15, discount: 0.5, quantity: 3, stock: 155},
    {name: 'Vegan Cheesse', price: 70, discount: 0.1, quantity: 1, stock: 118}
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
  const applyDiscounts = (cart) => {
      for (const product of cart) {
         const newPrice = product.price * (1 - product.discount)
         product.price = newPrice
       }
      const updatedSummary = CartSummary(cart)
      return updatedSummary
  }
  const checkStockAndUpdate = (cart) => {
    for (const product of cart) {
        if (product.quantity > product.stock) {
          return `Not enough stock of ${product.name}. ${product.quantity - product.stock} units are missing`
        } else {
          product.stock -= product.quantity
        }
    }
    return 'The purchase was successful.'
  }
  console.log(CartSummary(cart))
  console.log(checkStockAndUpdate(cart))
