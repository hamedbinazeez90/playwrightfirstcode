Feature:Ecommerce Validations
 
@Validations
Scenario Outline: Placing the Order
Given a login to Ecommerce2 application with "<UserNames>" and "<Passwords>"
Then Validate Error Message is displayed
Examples:
|UserNames |Passwords|
|hamed1@gmail.com|Learning@123|
|rahulshetty@gmail.com|hamed@123|
|hamed@gmail.com|Learning@123|