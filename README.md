/* README 

Cart Summary Calculator

Challenge 1:

Create a function that, given an array of objects representing products in a shopping cart, calculates the total price of the cart, the total number of products, and the total quantity of products in stock.

Challenge 2: 

Create a function to apply discounts to products in the shopping cart.

1. Modify the array of products in the cart by adding an additional discount property to each product with a numeric value between 0 and 1 (for example, a 10% discount would be represented as 0.1).
2. Create a function called applyDiscounts that takes a shopping cart as a parameter. The function should apply the discount to each product in the cart by multiplying the product's price by 1 - discount. Don't forget to also update the totalPrice property in the shopping cart summary.
3. Ensure that the CartSummary function still works correctly after applying the discounts.

Challenge 3: Create a function to check if there is enough stock of the products in the shopping cart and update the stock quantity after the purchase is made.

1. Create a function called checkStockAndUpdate that takes the shopping cart as a parameter. The function should check if there is enough stock of each product in the cart before making the purchase.
2. If there is not enough stock of any product in the cart, the function should return a message indicating which product doesn't have enough stock and how many are missing to complete the requested quantity.
3. If there is enough stock of all the products in the cart, update the available stock quantity of each product by subtracting the purchased quantity and return a message indicating that the purchase was successful.
4. Make sure the applyDiscounts function and CartSummary continue to work correctly after checking and updating the stock.

*/Initial commit
