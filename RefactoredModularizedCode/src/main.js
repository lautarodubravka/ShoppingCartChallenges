// Import functions from modules //

import { addToCart } from './cart/addToCart.js'
import { removeFromCart } from './cart/removeFromCart.js'
import { applyDiscounts } from './cart/applyDiscounts.js'
import { CartSummary } from './cart/CartSummary.js'

import { fetchInventory} from './inventory/fetchInventory.js'
import { Inventory } from './inventory/Inventory.js'
import { searchProducts } from "./inventory/searchProducts.js"
import { checkStockAndUpdate } from "./inventory/checkStockAndUpdate.js"

import { calculateTax } from "./tax/calculateTax.js"

const main = async () => {
    const inventory = await fetchInventory()
    const cart = []

    addToCart(1, 2, cart)
    addToCart(3, 1, cart)
    addToCart(6, 4, cart)
    addToCart(27, 3, cart)

    console.log('Final cart Cart summary before removing a product:', CartSummary(cart))
    removeFromCart(6, cart)
    console.log('Cart summary after removing a product:', CartSummary(cart))

    applyDiscounts(cart)
    const purchaseResult = checkStockAndUpdate(cart)
    console.log(purchaseResult)
    console.log('Final cart summary:', CartSummary(cart))
}
main()