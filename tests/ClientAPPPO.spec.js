const {expect,test} = require('@playwright/test');
const {LoginPage} = require('../PageObjects/LoginPage');
const {DashboardPage} = require('../PageObjects/DashBoardPage');
const {addtocart, AddToCart} = require('../PageObjects/AddToCart');
const { ConfirmOrder } = require('../PageObjects/ConfirmOrder');
const { json } = require('node:stream/consumers');
//below line what it does=>json to string , string to js object
const dataset =  JSON.parse(JSON.stringify(require('../Utils/placeorderTestData.json')));
//const {POManager} = require('../PageObjects/POManager');
//const { LoginPage } = require('../PageObjects/LoginPage');
const {customtest_hamed}= require('../Utils/test-base');

//test.describe.configure({mode:'parallel'}) for running below test in parallel
//test.describe.configure({mode:'serial'})//if one test failed, others will skip
 
for(const data of dataset){
test(`@Web Client App Login for ${data.prouductName}`,async ({page})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{
 
//const context =await browser.newContext();
//const page =await context.newPage();
//const pomanager = new POManager(page);
//const loginpage = pomanager.getLoginPage();//creating object for the class LoginPage
const loginPage = new LoginPage(page);
await loginPage.goto();
 
await loginPage.validLogin(data.username,data.password);
//await loginpage.validLogin(username,password); 
 
const dashboardpage = new DashboardPage(page); 
await dashboardpage.searchProductAddCart(data.prouductName);
await dashboardpage.navigateTOCart(); 
 
const addToCart = new AddToCart(page);
await addToCart.PlaceOrder(expect,data.prouductName);
 
const confirmorder = new ConfirmOrder(page);
await confirmorder.ViewOrderconfirmation(expect,data.username); 
 
//await page.pause(); 
 
}
);
}
 
 
customtest_hamed.only(`Client App Login`,async ({page,testdatafororders})=>//anonymous function
                                            //page is the global/playwright fixture
                                            //page is the global gixtuer, which will create
                                            //new browser instance and new page
{
 
//const context =await browser.newContext();
//const page =await context.newPage();
const loginPage = new LoginPage(page);
await loginPage.goto();
 
await loginPage.validLogin(testdatafororders.username,testdatafororders.password);
//await loginpage.validLogin(username,password); 
 
const dashboardpage = new DashboardPage(page); 
await dashboardpage.searchProductAddCart(testdatafororders.prouductName);
await dashboardpage.navigateTOCart();
 
 
const addToCart = new AddToCart(page);
await addToCart.PlaceOrder(expect,testdatafororders.prouductName);
 
const confirmorder = new ConfirmOrder(page);
await confirmorder.ViewOrderconfirmation(expect,testdatafororders.username);
 
 
}
)

 