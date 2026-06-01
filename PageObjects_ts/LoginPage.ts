import {test,expect,Page, Locator} from '@playwright/test'

export class LoginPage {
    page : Page
    signInbutton:Locator;
    userName:Locator;
    password:Locator;
    products:Locator;

    constructor(page:any)
    {
        this.page =  page;
        this.signInbutton = page.locator("#login");
        this.userName = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.products = page.locator(".card-body");
    }

async goto()
{
    await this.page.goto("https://rahulshettyacademy.com/client",  { waitUntil: 'domcontentloaded' });
}
   async validLogin(username:string, password:string)
    {
     await this.userName.fill(username);
     await this.password.fill(password);
     await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
     
    }
}
// module.exports = {LoginPage};