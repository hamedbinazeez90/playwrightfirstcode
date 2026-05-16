const { DashboardPage } = require("./DashBoardPage");
const { LoginPage } = require("./LoginPage");
const {AddToCart} =require('./AddToCart');
const {ConfirmOrder} = require('./ConfirmOrder');
 
class POManager{ 
 
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.addtocart = new AddToCart(this.page);
    this.confirmorder = new ConfirmOrder(this.page);
}
 
async getLoginPage()
{
 
    return await this.loginPage;
}
  
async getDashboardPage()
{
    return await this.dashboardPage;
}
 
async getAddToCart()
{
    return await this.addtocart;
}
 
async getconfirmorder()
{
    return await this.confirmorder;
}
 
} 
module.exports = {POManager};