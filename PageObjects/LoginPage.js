class LoginPage {
 
    constructor(page)
    {
        this.page =  page;
        this.signInbutton = page.locator("#login");
        this.userName = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.products = page.locator(".card-body");
    }
 
async goto()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
}
   async validLogin(username, password)
    {
     await this.userName.type(username);
     await this.password.type(password);
     await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
     
    }
}
module.exports = {LoginPage};