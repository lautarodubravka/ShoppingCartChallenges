const removeFromCart = (productId, cart) => {
    const indexToRemove = cart.findIndex((product) => product.id === productId)
    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1)
    }
}

export { removeFromCart }