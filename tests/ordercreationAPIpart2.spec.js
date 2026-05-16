const {test,expect,request} = require("@playwright/test");

let webContext;
test.beforeAll(async ({browser})=>{
    const context =await browser.newContext();
    const page =await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/");
const email ="hamed@gmail.com";
await page.locator("[type='email']").fill(email);
await page.locator("[type='password']").fill("Learning@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');// wait until the network is idle
await context.storageState({path:'state.json'})
webContext=await browser.newContext({storageState:'state.json'})

})

test('@API Client API Login ',async ({})=>
{

const email=""
const prouductName="ZARA COAT 3"

const page=await webContext.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
const product = await page.locator(".card-body b")
const titles= await product.allTextContents();
console.log(titles)

})
test('@API Client API Login2 ',async ({})=>
{

const email=""
const prouductName="ZARA COAT 3"

const page=await webContext.newPage()
await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
const product = await page.locator(".card-body b")
const titles= await product.allTextContents();
console.log(titles)

}

)