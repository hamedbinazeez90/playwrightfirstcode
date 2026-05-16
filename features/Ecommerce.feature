Feature:Ecommerce Validations
 
@Regression
Scenario: Placing the Order
Given a login to Ecommerce application with "hamed@gmail.com" and "Learning@123"
When Add "ZARA COAT 3" to Cart
When Enter valid details and Place the Order "ZARA COAT 3"
Then Verify order is present in the OrderHistory for "hamed@gmail.com"

@Regression
Scenario: Placing the Order again with different id
Given a login to Ecommerce application with "hamed@gmail.com" and "Learning@123"
When Add "ADIDAS ORIGINAL" to Cart
When Enter valid details and Place the Order "ADIDAS ORIGINAL"
Then Verify order is present in the OrderHistory for "hamed@gmail.com"