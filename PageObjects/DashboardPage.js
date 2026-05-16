const { title } = require("node:process");
 
class DashboardPage
{
 
    constructor(page)
 
    {  
        this.page = page;
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
    }
 
 
    async searchProductAddCart(prouductName)
    {
       
       
        const titles = await this.productText.allTextContents();
        console.log(titles);
        const count =await this.products.count();
        console.log(count);
 
       
            for(let i =0;i<count;++i)
            {
                if(await this.products.nth(i).locator("b").textContent()=== prouductName)
                {
                    await this.products.nth(i).locator("text= Add to Cart").click();//add to cart
                    break;
                }
            }
 
    }
 
   async navigateTOCart(){
 
       await this.cart.click();
    }
}
module.exports = {DashboardPage};