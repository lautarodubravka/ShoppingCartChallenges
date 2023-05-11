import { addToCart } from '../../cart/addToCart.js'
import { Inventory } from '../../inventory/Inventory.js'

//First test:

test('add a product to an empty cart', async () => {
    const cart = []
    const productId = 1
    const quantity = 1
    addToCart(productId, quantity, cart)
  
    expect(cart).toEqual([
      {
        id: 1,
        name: "Vegan Salad",
        price: 30,
        quantity: 1,
        discount: 0.2,
        stock: 50,
      },
    ])
  })

//Second Test

test('increment product quantity in cart ', () => {
  const cart = [
    {
      id: 1,
      name: "Vegan Salad",
      price: 30,
      quantity: 1,
    },
  ]
  const productId = 1
  const quantityToAdd = 2

  addToCart(productId, quantityToAdd, cart)

  expect(cart).toEqual([
    {
      id: 1,
      name: "Vegan Salad",
      price: 30,
      quantity: 1,
    },
    {
      id: 1,
      name: "Vegan Salad",
      price: 30,
      quantity: 2,
      discount: 0.2,
      stock: 50,
    },
  ])
})
