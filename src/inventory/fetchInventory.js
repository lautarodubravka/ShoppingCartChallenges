import { Inventory } from './Inventory.js'

const fetchInventory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Inventory)
        }, 1000)
    })
}

export { fetchInventory }