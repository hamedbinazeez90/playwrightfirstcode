const {expect,test} = require('@playwright/test');
 
 
test.only('End to End product order',async ({browser})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{
 
const context =await browser.newContext();
const page =await context.newPage();
 
// await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");await page.locator(".text-reset").click();
await page.goto("https://rahulshettyacademy.com/client/");
const email ="hamed@gmail.com";
await page.locator("[type='email']").fill(email);
await page.locator("[type='password']").fill("Learning@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');// wait until the network is idle
const products = page.locator(".card-body");
await products.first().waitFor();// wait for the element to be loaded,visible
 
const prouductName = "ZARA COAT 3";
 
const count =await products.count();
console.log(count);
console.log(await products.allTextContents());
 
for(let i =0;i<count;++i)
{
    if(await products.nth(i).locator("b").textContent()=== prouductName)
    {
        await products.nth(i).locator("text= Add to Cart").click();
        break;
    }
}
//await page.pause();
 
await page.locator("[routerlink*='cart']").click();
await page.locator("li div").first().isVisible();
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
console.log(bool);
console.log(await page.locator("h3:has-text('ZARA COAT 3')").textContent());
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});//type slowly by keeping 150
const dropdown=page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for(let i=0;i<optionsCount;++i){
  const text=  await dropdown.locator("button").nth(i).textContent();
 
  if(text===" India"){
    await dropdown.locator("button").nth(i).click();
    break;
  }
}
//await page.pause();
 
await expect(page.locator(".user__name [type='text']").first(),{timeout:2000}).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
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
console.log("Order received at the end:  ");
    console.log(orderIDDetails);
expect(orderID.includes(orderIDDetails)).toBeTruthy();
 
 
}
)