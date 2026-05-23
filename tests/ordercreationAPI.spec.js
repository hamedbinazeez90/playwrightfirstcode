const {test,expect,request} = require("@playwright/test");
//const {APiUtils} = require('./utils/APiUtils');
const LoginPayLoad = {userEmail:"hamed@gmail.com",userPassword:"Learning@123"};
const orderPayLoad= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let token;
let orderId;
test.beforeAll('need the api details before any api action', async()=>{ 
const apicontext = await request.newContext();
const loginResponse =await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: LoginPayLoad,
    }
)
console.log(loginResponse.status())
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson =await loginResponse.json();
token = loginResponseJson.token;
console.log(token);
//
const orderResponse =await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
    data: orderPayLoad,
    headers: {
        'Authorization' :token,
        'Content-Type'   :'application/json',
             },
}
)
console.log(orderResponse.status())
expect (orderResponse.ok()).toBeTruthy();
const orderResponseJson =await orderResponse.json();
console.log(orderResponseJson);
orderId =orderResponseJson.orders[0]; 
});

test('@API Client API Login ',async ({browser})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{   
  const context = await browser.newContext();
    const page= await context.newPage();
page.addInitScript(value =>{window.localStorage.setItem('token', value)},token );
 // addinitscript()-->inject JavaScript code before the page's own scripts start running.
 //window.localStorage.setItem--> store a key–value pair inside the browser’s local storage.
    console.log("token received here is :  " +token);
   
    await page.goto("https://rahulshettyacademy.com/client/");
 
await page.locator("button[routerlink*='myorders']").click();//after thnx for order, click orders
await page.locator("text=  ORDERS").first().click();
await page.locator("tbody").waitFor();
 
const rows =  page.locator("tbody tr");
 
for(let i=0;i<await rows.count();++i){
   const rowOrderID= await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderID)){
        await rows.nth(i).locator("button").first().click();
        break;
    }
}
const orderIDDetails = await page.locator(".col-text").textContent();
// await page.pause();
console.log("Order received at the end  ");
    console.log(orderIDDetails);
expect(orderId.includes(orderIDDetails)).toBeTruthy();
}
)