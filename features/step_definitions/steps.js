const {When, Then, Given} =require('@cucumber/cucumber');
const {POManager} = require('../../PageObjects/POManager');
const {expect} =require('@playwright/test');
const playwright = require('@playwright/test');
// const { convertToObject } = require('typescript');
 
 
 
Given('a login to Ecommerce application with {string} and {string}',
     {timeout :100*1000},async function (username, password) {
            const loginPage = await this.pomanager.getLoginPage();
            await loginPage.goto();
            await loginPage.validLogin(username,password);
         });
 
         When('Add {string} to Cart', async function (prouductName) {
           // Write code here that turns the phrase above into concrete actions      
          this.dashboardPage = await this.pomanager.getDashboardPage();
            await this.dashboardPage.searchProductAddCart(prouductName);
            await this.dashboardPage.navigateTOCart();
         });
 
        //   Then('Verify {string} is displayed in the Cart', async function (prouductName) {
        //    // Write code here that turns the phrase above into concrete actions
        //    this.addToCart = new AddToCart(page);
        //     await addToCart.PlaceOrder(expect);
        //  });
 
         When('Enter valid details and Place the Order {string}', async function (prouductName) {
           
         
          const addToCart = await this.pomanager.getAddToCart();
          await addToCart.PlaceOrder(expect,prouductName);
          await addToCart.clickPlace();
         });
 
 
         Then('Verify order is present in the OrderHistory for {string}', 
          async function (username) {
           // Write code here that turns the phrase above into concrete actions
           
          const confirmorder=await this.pomanager.getconfirmorder();
            await confirmorder.ViewOrderconfirmation(expect,username);
         });
 
 
             Then('Validate Error Message is displayed',async  function () {
             console.log(await this.page.locator("[style*='block']").textContent());
             await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')
 
         });
 
         Given('a login to Ecommerce2 application with {string} and {string}',
           {timeout :100*1000},async function (username, password) {
          const userName=this.page.locator('#username');
          const signIn = this.page.locator('#signInBtn');
          await this.page.goto("https://rahulshettyacademy.com/loginpagePractise");
              console.log(await this.page.title());
              await userName.type(username);
              await this.page.locator("[type='password']").type(password);
              await signIn.click();
         });