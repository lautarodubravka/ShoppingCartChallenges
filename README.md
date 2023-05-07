/* README 

Cart Summary Calculator

Challenge 1:

Create a function that, given an array of objects representing products in a shopping cart, calculates the total price of the cart, the total number of products, and the total quantity of products in stock.

Challenge 2: 

Create a function to apply discounts to products in the shopping cart.

1. Modify the array of products in the cart by adding an additional discount property to each product with a numeric value between 0 and 1 (for example, a 10% discount would be represented as 0.1).
2. Create a function called applyDiscounts that takes a shopping cart as a parameter. The function should apply the discount to each product in the cart by multiplying the product's price by 1 - discount. Don't forget to also update the totalPrice property in the shopping cart summary.
3. Ensure that the CartSummary function still works correctly after applying the discounts.

Challenge 3: 

Create a function to check if there is enough stock of the products in the shopping cart and update the stock quantity after the purchase is made.

1. Create a function called checkStockAndUpdate that takes the shopping cart as a parameter. The function should check if there is enough stock of each product in the cart before making the purchase.
2. If there is not enough stock of any product in the cart, the function should return a message indicating which product doesn't have enough stock and how many are missing to complete the requested quantity.
3. If there is enough stock of all the products in the cart, update the available stock quantity of each product by subtracting the purchased quantity and return a message indicating that the purchase was successful.
4. Make sure the applyDiscounts function and CartSummary continue to work correctly after checking and updating the stock.

<<<<<<< HEAD
Challenge 4: Calculate the tax and final price of the shopping cart.

1. Create a function called calculateTax that takes a shopping cart and a tax percentage as parameters. This function should calculate the tax to be paid for the shopping cart and return the tax value.
2. Modify the CartSummary function to also return the tax and final price of the shopping cart, which is the total price of the cart plus the tax. Make sure to call the calculateTax function inside CartSummary.
3. Verify that the CartSummary function continues to work correctly after applying the discounts and calculating the tax and final price.
Print the shopping cart summary in the console, showing the total price, tax, and final price.

Challenge 5: Simulate a Database Query.

In this challenge, you will simulate fetching product data from a MongoDB database. You will use the provided inventory of 50 products to mimic a database query. Your task is to create a function that receives a list of product IDs and returns the corresponding product information from the simulated database.

1. Use the provided inventory of 50 products as your "database."
2. Create a function called fetchProductsFromDB that takes an array of product IDs as an argument.
3. The function should iterate through the product IDs, find the matching products in the inventory, and return an array of the found products.
4. For testing purposes, call the function with a sample list of product IDs and log the returned product information to the console.
*/
