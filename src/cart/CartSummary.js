import { calculateTax } from '../tax/calculateTax.js'

const CartSummary = (cart) => {
    let totalPrice = 0
    let totalQuantity = 0
    let totalStock = 0
    for (const product of cart) {
        totalPrice += product.price * product.quantity
        totalQuantity += product.quantity
        totalStock += product.stock
    }

    const taxAmount = calculateTax(totalPrice)
    return {
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        totalStock: totalStock,
        taxAmount: taxAmount,
    }
}

export { CartSummary }