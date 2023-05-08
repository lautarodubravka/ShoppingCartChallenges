/* Challenge 6: Remove products from the cart*/

const Inventory = [
    { id: 1, name: "Vegan Salad", price: 30, discount: 0.2, stock: 50 },
    { id: 2, name: "Water", price: 15, discount: 0.5, stock: 155 },
    { id: 3, name: "Vegan Cheesse", price: 70, discount: 0.1, stock: 118 },
    { id: 4, name: "Organic Apple", price: 5, discount: 0.0, stock: 200 },
    { id: 5, name: "Peanut Butter", price: 25, discount: 0.15, stock: 75 },
    { id: 6, name: "Almond Milk", price: 20, discount: 0.1, stock: 100 },
    { id: 7, name: "Granola", price: 18, discount: 0.05, stock: 120 },
    { id: 8, name: "Banana", price: 2, discount: 0.0, stock: 300 },
    { id: 9, name: "Rice", price: 15, discount: 0.1, stock: 80 },
    { id: 10, name: "Tofu", price: 25, discount: 0.2, stock: 100 },
    { id: 11, name: "Avocado", price: 4, discount: 0.0, stock: 250 },
    { id: 12, name: "Almonds", price: 28, discount: 0.1, stock: 95 },
    { id: 13, name: "Cashews", price: 30, discount: 0.15, stock: 90 },
    { id: 14, name: "Walnuts", price: 24, discount: 0.05, stock: 110 },
    { id: 15, name: "Pecans", price: 26, discount: 0.1, stock: 100 },
    { id: 16, name: "Pistachios", price: 22, discount: 0.05, stock: 120 },
    { id: 17, name: "Macadamias", price: 32, discount: 0.1, stock: 80 },
    { id: 18, name: "Hazelnuts", price: 27, discount: 0.05, stock: 100 },
    { id: 19, name: "Brazil Nuts", price: 29, discount: 0.1, stock: 90 },
    { id: 20, name: "Pine Nuts", price: 35, discount: 0.1, stock: 70 },
    { id: 21, name: "Organic Tomato", price: 3, discount: 0.0, stock: 300 },
    { id: 22, name: "Organic Carrot", price: 2, discount: 0.0, stock: 400 },
    { id: 23, name: "Organic Broccoli", price: 4, discount: 0.0, stock: 200 },
    { id: 24, name: "Organic Cucumber", price: 3, discount: 0.0, stock: 300 },
    { id: 25, name: "Organic Spinach", price: 6, discount: 0.0, stock: 150 },
    { id: 26, name: "Organic Lettuce", price: 5, discount: 0.0, stock: 175 },
    { id: 27, name: "Organic Bell Pepper", price: 4, discount: 0.0, stock: 225 },
    { id: 28, name: "Organic Mushroom", price: 8, discount: 0.0, stock: 120 },
    { id: 29, name: "Organic Onion", price: 3, discount: 0.0, stock: 350 },
    { id: 30, name: "Organic Garlic", price: 2, discount: 0.0, stock: 450 },
    { id: 31, name: "Organic Kale", price: 6, discount: 0.0, stock: 150 },
    { id: 32, name: "Organic Zucchini", price: 4, discount: 0.0, stock: 200 },
    { id: 33, name: "Organic Cauliflower", price: 5, discount: 0.0, stock: 175 },
    { id: 34, name: "Organic Sweet Potato", price: 4, discount: 0.0, stock: 200 },
    { id: 35, name: "Organic Green Beans", price: 6, discount: 0.0, stock: 150 },
    { id: 36, name: "Organic Corn", price: 5, discount: 0.0, stock: 175 },
    { id: 37, name: "Organic Celery", price: 4, discount: 0.0, stock: 200 },
    { id: 38, name: "Organic Beets", price: 5, discount: 0.0, stock: 175 },
    { id: 39, name: "Organic Cabbage", price: 4, discount: 0.0, stock: 200 },
    { id: 40, name: "Organic Leek", price: 6, discount: 0.0, stock: 150 },
    { id: 41, name: "Organic Brussels Sprouts", price: 8, discount: 0.0, stock: 100 },
    { id: 42, name: "Organic Swiss Chard", price: 6, discount: 0.0, stock: 150 },
    { id: 43, name: "Organic Radish", price: 3, discount: 0.0, stock: 300 },
    { id: 44, name: "Organic Eggplant", price: 4, discount: 0.0, stock: 200 },
    { id: 45, name: "Organic Artichoke", price: 7, discount: 0.0, stock: 125 },
    { id: 46, name: "Organic Asparagus", price: 9, discount: 0.0, stock: 100 },
    { id: 47, name: "Organic Collard Greens", price: 6, discount: 0.0, stock: 150 },
    ]
const fetchInventory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Inventory)
        }, 1000)
    })
}
const addToCart = (productId, quantity, cart) => {
    const product = Inventory.find((item) => item.id === productId)
    if (product) {
        const cartItem = {
            ...product,
            quantity,
        }
        cart.push(cartItem)
    }
}
const CartSummary = (cart) => {
    let totalPrice = 0
    let totalQuantity = 0
    let totalStock = 0
    for (const product of cart) {
        totalPrice += product.price * product.quantity
        totalQuantity += product.quantity
        totalStock += product.stock
    }

    const calculateTax = () => {
        let taxRate = 0.20
        let taxAmount = totalPrice * taxRate
        return taxAmount
    }

    const taxAmount = calculateTax()

    return {
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        totalStock: totalStock,
        taxAmount: taxAmount,
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
        const inventoryItem = Inventory.find((item) => item.id === product.id)
        if (product.quantity > inventoryItem.stock) {
            return `Not enough stock of ${product.name}. ${product.quantity - inventoryItem.stock} units are missing`
        } else {
            inventoryItem.stock -= product.quantity
        }
    }
    return 'The purchase was successful.'
}

const removeFromCart = (productId, cart) => {
    const indexToRemove = cart.findIndex((product) => product.id === productId)
    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1)
    }
}
const main = async () => {
    const inventory = await fetchInventory()
    const cart = []

    addToCart(1, 2, cart)
    addToCart(3, 1, cart)
    addToCart(6, 4, cart)
    addToCart(27, 3, cart)

    applyDiscounts(cart)
    const purchaseResult = checkStockAndUpdate(cart)
    console.log(purchaseResult)
    console.log('Final cart summary:', CartSummary(cart))
}
main()