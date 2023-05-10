import { CartSummary } from './CartSummary.js'

const applyDiscounts = (cart) => {
    for (const product of cart) {
        const newPrice = product.price * (1 - product.discount)
        product.price = newPrice
    }
    const updatedSummary = CartSummary(cart)
    return updatedSummary
}

export { applyDiscounts }