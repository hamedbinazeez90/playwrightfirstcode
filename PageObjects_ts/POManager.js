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

    return  this.loginPage;
}


async getDashboardPage()
{
    return  this.dashboardPage;
}

async getAddToCart()
{
    return  this.addtocart;
}

async getconfirmorder()
{
    return  this.confirmorder;
}

}

module.exports = {POManager};