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

export { addToCart }