const {expect,test} = require('@playwright/test');
const { json } = require('node:stream/consumers');
const dataset =  JSON.parse(JSON.stringify(require('../Utils/placeorderTestData.json')));
const {POManager} = require('../PageObjects/POManager');
const {LoginPage} = require('../PageObjects/LoginPage');
const {DashBoardPage} = require('../PageObjects/DashBoardPage');
const {AddToCart} = require('../PageObjects/AddToCart');
const {ConfirmOrder}= require('../PageObjects/ConfirmOrder'); 
const {customtest, customtest_hamed}= require('../Utils/test-base');
 
 
customtest_hamed(`Client App Login`,async ({page})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{
 //designed by M Hamed
const username="hamed@gmail.com";
const password ="Learning@123";
const prouductName ="ZARA COAT 3";
const pomanager = new POManager(page);
const loginPage = await pomanager.getLoginPage();
await loginPage.goto();
await loginPage.validLogin(username,password);
const dashboardPage = await pomanager.getDashboardPage();
await dashboardPage.searchProductAddCart(prouductName);
await dashboardPage.navigateTOCart();
const cartPage=await pomanager.getAddToCart();
await cartPage.PlaceOrder(expect,prouductName);
await cartPage.clickPlace();
//await cartPage.verifyProductIsDisplayed(prouductName)
const confirmorder = await pomanager.getconfirmorder();
await confirmorder.ViewOrderconfirmation(expect,username);
  
}
)
 

 