const {expect,test} = require('@playwright/test');
const { request } = require('node:http');
 
 
test.only('End to End product order',async ({browser})=>
{
 
const context =await browser.newContext();
const page =await context.newPage();
page.route('**/*.{jpg,png,jpeg}',route=>route.abort())
 
// await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");await page.locator(".text-reset").click();
await page.goto("https://rahulshettyacademy.com/client/");
const email ="hamed@gmail.com";
await page.locator("[type='email']").fill(email);
await page.locator("[type='password']").fill("Learning@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');// wait until the network is idle
const products = page.locator(".card-body");
page.on('request',request=>console.log(request.url()))
page.on('response',response=>console.log(response.url(),response.status()))

await products.first().waitFor();// wait for the element to be loaded,visible
 
const prouductName = "ZARA COAT 3";
 
const count =await products.count();
console.log(count);
console.log(await products.allTextContents());
 
}
)