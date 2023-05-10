// Import functions from modules //

import { addToCart } from './cart/addToCart.js'
import { removeFromCart } from './cart/removeFromCart.js'
import { applyDiscounts } from './cart/applyDiscounts.js'
import { CartSummary } from './cart/CartSummary.js'

import { fetchInventory} from './inventory/fetchInventory.js'
import { checkStockAndUpdate } from "./inventory/checkStockAndUpdate.js"

import { registerUser } from './auth/registerUser.js'
import { loginUser } from './auth/loginUser.js'
import { logoutUser } from './auth/logoutUser.js'

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

    console.log(registerUser("user3", "password3")); // Should register the user and return "User registered successfully."
    console.log(registerUser("user1", "password1")); // Should return "Error: Username already exists."
    console.log(loginUser("user1", "password1")); // Should log in and return "Login successful."
    console.log(loginUser("user1", "wrongpassword")); // Should return "Error: Incorrect username or password."
    console.log(logoutUser("user1")); // Should log out and return "Logout successful."
    console.log(logoutUser("nonexistentuser")); // Should return "Error: Username does not exist."    
}
main()