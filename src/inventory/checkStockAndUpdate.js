import { Inventory } from './Inventory.js'

const checkStockAndUpdate = (cart) => {
    for (const product of cart) {
        const inventoryItem = Inventory.find((item) => item.id === product.id)
        if (product.quantity > inventoryItem.stock) {
            return `Not enough stock of ${product.name}. ${product.quantity - inventoryItem.stock} units are missing`
        } else {
            inventoryItem.stock -= product.quantity
        }
    }
    return 'The purchase was successful.'
}

export { checkStockAndUpdate }