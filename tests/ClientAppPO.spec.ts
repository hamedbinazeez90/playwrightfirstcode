// const {expect,test} = require('@playwright/test');
import {expect,test} from '@playwright/test';
import {customTest} from '../Utils_ts/test-base';

import { LoginPage } from "../PageObjects/LoginPage";
import { DashboardPage } from "../PageObjects/DashBoardPage";
import { AddToCart } from "../PageObjects/AddToCart";
import { ConfirmOrder } from "../PageObjects/ConfirmOrder";
import {Page} from '@playwright/test';



//const { json } = require('node:stream/consumers');
//const dataset =  JSON.parse(JSON.stringify(require("../Utils/placeorderTestData.json")));

//const {POManager} = require('../PageObjects/POManager');
//const { LoginPage } = require('../PageObjects/LoginPage');
//const {customtest}= require('../Utils/test-base');

// for(const data of dataset){
// test(`@Web Client App Login for ${data.prouductName}`,async ({page})=>//anonymous function
//                                             //page is the global/playwright fixture
//                                             //page is the global gixtuer, which will create
//                                             //new browser instance and new page
// {

// //const context =await browser.newContext();
// //const page =await context.newPage();
// //const pomanager = new POManager(page);
// //const loginpage = pomanager.getLoginPage();//creating object for the class LoginPage
// const loginPage = new LoginPage(page);
// await loginPage.goto();

// await loginPage.validLogin(data.username,data.password);
// //await loginpage.validLogin(username,password);

// // await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");
// // await page.locator(".text-reset").click();


// const dashboardpage = new DashboardPage(page);

// //await page.pause();

// await dashboardpage.searchProductAddCart(data.prouductName);
// await dashboardpage.navigateTOCart();


// const addToCart = new AddToCart(page);
// await addToCart.PlaceOrder(expect,data.prouductName);

// const confirmorder = new ConfirmOrder(page);
// await confirmorder.ViewOrderconfirmation(expect,data.username);


// //await page.pause();




// }
// );
// }


customTest(`@ Web Client App Login`,async ({page,testdatafororders})=>//anonymous function
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

await loginPage.validLogin(testdatafororders.username,testdatafororders.password);
//await loginpage.validLogin(username,password);

// await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");
// await page.locator(".text-reset").click();


const dashboardpage = new DashboardPage(page);

//await page.pause();

await dashboardpage.searchProductAddCart(testdatafororders.prouductName);
await dashboardpage.navigateTOCart();


const addToCart = new AddToCart(page);
await addToCart.PlaceOrder(expect,testdatafororders.prouductName);

const confirmorder = new ConfirmOrder(page);
await confirmorder.ViewOrderconfirmation(expect,testdatafororders.username);


//await page.pause();




}
)