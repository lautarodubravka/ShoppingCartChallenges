/* README 

E-commerce Cart JS Challenges
------------------------------------------------------
In this repository, each challenge has been implemented in a separate file to maintain a clear record of the solutions to each individual problem. Although in a real project, it could be organized in a more modular way using imports and grouping related functions, in this case, it has been chosen to keep each challenge in its own file to facilitate understanding of progress throughout the challenges. (a modular structure is implemented in challenge 8)
------------------------------------------------------
The file names are as follows: 

Challenge 1: cartSummaryChallenge.js 
Challenge 2: cartDiscountChallenge.js
Challenge 3: checkStockChallenge.js
Challenge 4: calculateTaxChallenge.js
Challenge 5: simulatedDataBaseChallenge.js
Challenge 6: removeFromCartChallenge.js
Challenge 7: searchproductsChallenge.js
Challenge 8: 
Challenge 9:
Challenge 10:

Each file contains the necessary code to solve the corresponding challenge, and there may be repeated code among them. In Challenge 8, the restructuring and refactoring of the project will be addressed to demonstrate how code organization can be improved in such situations.

------------------------------------------------------

Challenge 1 (cartSummaryChallenge.js):

Create a function that, given an array of objects representing products in a shopping cart, calculates the total price of the cart, the total number of products, and the total quantity of products in stock.

Challenge 2 (cartDiscountChallenge.js): 

Create a function to apply discounts to products in the shopping cart.

1. Modify the array of products in the cart by adding an additional discount property to each product with a numeric value between 0 and 1 (for example, a 10% discount would be represented as 0.1).
2. Create a function called applyDiscounts that takes a shopping cart as a parameter. The function should apply the discount to each product in the cart by multiplying the product's price by 1 - discount. Don't forget to also update the totalPrice property in the shopping cart summary.
3. Ensure that the CartSummary function still works correctly after applying the discounts.

Challenge 3 (checkStockChallenge.js): 

Create a function to check if there is enough stock of the products in the shopping cart and update the stock quantity after the purchase is made.

1. Create a function called checkStockAndUpdate that takes the shopping cart as a parameter. The function should check if there is enough stock of each product in the cart before making the purchase.
2. If there is not enough stock of any product in the cart, the function should return a message indicating which product doesn't have enough stock and how many are missing to complete the requested quantity.
3. If there is enough stock of all the products in the cart, update the available stock quantity of each product by subtracting the purchased quantity and return a message indicating that the purchase was successful.
4. Make sure the applyDiscounts function and CartSummary continue to work correctly after checking and updating the stock.

Challenge 4 (calculateTaxChallenge.js): 

Calculate the tax and final price of the shopping cart.

1. Create a function called calculateTax that takes a shopping cart and a tax percentage as parameters. This function should calculate the tax to be paid for the shopping cart and return the tax value.
2. Modify the CartSummary function to also return the tax and final price of the shopping cart, which is the total price of the cart plus the tax. Make sure to call the calculateTax function inside CartSummary.
3. Verify that the CartSummary function continues to work correctly after applying the discounts and calculating the tax and final price.
Print the shopping cart summary in the console, showing the total price, tax, and final price.

Challenge 5 (simulatedDataBaseChallenge.js): 

Simulate a Database Query.

In this challenge, you will simulate fetching product data from a MongoDB database. You will use the provided inventory of 50 products to mimic a database query. Your task is to create a function that receives a list of product IDs and returns the corresponding product information from the simulated database.

1. Use the provided inventory of 50 products as your "database."
2. Create a function called fetchProductsFromDB that takes an array of product IDs as an argument.
3. The function should iterate through the product IDs, find the matching products in the inventory, and return an array of the found products.
4. For testing purposes, call the function with a sample list of product IDs and log the returned product information to the console.

Challenge 6 (removeFromCartChallenge.js): 

Remove products from the cart.

In this challenge, you must add a function that allows removing products from the cart. The function should receive the ID of the product to be removed and update the cart by removing the corresponding product.

Requirements:

1. Create a function called removeFromCart that takes two arguments: productId and cart.
2. The function should search for the product in the cart using the provided product ID.
3. If the product is found in the cart, it should be removed.
4. If the product is not found in the cart, the function should display a message indicating that the product is not in the cart.
5. After removing a product from the cart, display the updated cart summary using the CartSummary function.
Upon completing this challenge, you should be able to add and remove products from the cart and view the updated cart summary.
6. Modify the main function to also include removing a product from the cart and displaying the cart summary after the removal. You can choose any product that is already in the cart to remove it.

So, now you should modify the main function to include the removeFromCart function we previously created and display the cart summary after removing a product.


Challenge 7 (searchProductsChallenge.js): 

Implement a search function to find products in the inventory by name or category.

Challenge 8 (RefactoredModularizedCode): 

Improve the code structure by splitting it into modules, using imports and exports instead of having everything in a single file.

Challenge 9: 

Implement a basic authentication system to simulate user login and registration.

Challenge 10: 

Add unit tests to ensure that all functions are working correctly.
*/
