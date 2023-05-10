const searchProducts = (query, Inventory) => {
    const searchResult = Inventory.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    return searchResult
}

export { searchProducts }