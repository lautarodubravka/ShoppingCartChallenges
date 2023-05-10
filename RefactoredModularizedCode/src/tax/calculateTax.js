const calculateTax = (totalPrice) => {
    let taxRate = 0.20
    let taxAmount = totalPrice * taxRate
    return taxAmount
}

export { calculateTax }