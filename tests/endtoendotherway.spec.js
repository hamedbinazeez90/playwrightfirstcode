const {expect,test} = require('@playwright/test');
 
 
test.only('@ui child window handler',async ({browser})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{
 
const context =await browser.newContext();
const page =await context.newPage();
 
await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");
await page.locator(".text-reset").click();
const email ="hamed@gmail.com";
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill("Learning@123");
await page.getByRole("button",{name : "Login"}).click();
 
const products = page.locator(".card-body");
await products.first().waitFor();
 
const prouductName = "ZARA COAT 3";
 
const count =await products.count();
console.log(count);
console.log(await products.allTextContents());
 
 
await page.locator(".card").filter({hasText : "ZARA COAT 3"}).getByRole("button",{name: " Add To Cart"}).click();
 
//await page.pause();
 
 
await page.getByRole("listitem").getByRole("button",{name: "Cart"}).click();
 
await page.locator("li div").first().isVisible();
await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
await page.getByRole("button",{name: "Checkout"}).click();
 
await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});//type slowly by keeping 150 ms
const dropdown=page.locator(".ta-results");
await dropdown.waitFor();
 
 
await page.getByRole("button",{name: "India"}).nth(1).click();
//await page.pause();
 
await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.getByText("Place Order ").click();
 
await expect(page.getByText("Thankyou for the order. ")).toBeVisible();
const orderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderID);
 
await page.locator("text=  ORDERS").first().click();
await page.locator("tbody").waitFor();
 
const rows =  page.locator("tbody tr");
 
for(let i=0;i<await rows.count();++i){
   const rowOrderID= await rows.nth(i).locator("th").textContent();
    if (orderID.includes(rowOrderID)){
        await rows.nth(i).locator("button").first().click();
        break;
    }
}
const orderIDDetails = await page.locator(".col-text").textContent();
console.log("Order received at the end  ");
    console.log(orderIDDetails);
expect(orderID.includes(orderIDDetails)).toBeTruthy();
 
 
}
)