const { Before,After, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const {POManager} = require('../../PageObjects/POManager');
const { resourceUsage } = require("node:process");
 
Before(async function (){
 
    const browser = await playwright.chromium.launch({headless:false});
          const context=await browser.newContext();
          this.page=await context.newPage();
          this.pomanager = new POManager(this.page);
});
 
BeforeStep(function (){
 
});
AfterStep(async function({result}){
    if(result.status===Status.FAILED){
        await this.page.screenshot({path:'creenshotcucumber.png',fullPage:true});
    }
}
);
 
After(function(){
 
console.log("I am the last to execute");
});
 