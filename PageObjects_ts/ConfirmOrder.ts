
import {test,expect,Page,Locator} from '@playwright/test'

export class ConfirmOrder{
    page : Page
    username:Locator;
    submitorder:Locator;
    thanksmessage:Locator;
    orderIDconfirm:Locator;
    orderHistory:Locator;
    waitforOrderstable:Locator;
    ordertablerows:Locator;
    finalorderconfirmation:Locator;



    constructor(page:Page)
    {
        this.page = page;
       this.username = page.locator(".user__name [type='text']").first();
       this.submitorder = page.locator(".action__submit");
       this.thanksmessage = page.locator(".hero-primary");
       this.orderIDconfirm = page.locator(".em-spacer-1 .ng-star-inserted");
        this.orderHistory = page.locator("text=  ORDERS");
        this.waitforOrderstable = page.locator("tbody");
        this.ordertablerows =page.locator("tbody tr");
        this.finalorderconfirmation = page.locator(".col-text");
    }


    async ViewOrderconfirmation(expect:any,username:string)
    {
          let rowOrderID:any
         let orderID:any
        await expect(this.username).toHaveText(username);
        console.log("received user name is " + username)
        await this.submitorder.click();
        await expect( this.thanksmessage).toHaveText(" Thankyou for the order. ");
        orderID= await this.orderIDconfirm .textContent();
        console.log(orderID);

        await this.orderHistory.first().click();
        await this.waitforOrderstable.waitFor();

        const rows =  this.ordertablerows;

            for(let i=0;i<await rows.count();++i){
              
             rowOrderID= await rows.nth(i).locator("th").textContent();
                if (orderID.includes(rowOrderID)){
                    await rows.nth(i).locator("button").first().click();
                    break;
                }
            }
            const orderIDDetails = await this.finalorderconfirmation.textContent();
            console.log("Order received at the end  ");
            console.log(orderIDDetails);
            expect(orderID.includes(orderIDDetails)).toBeTruthy();
    }
}
//module.exports ={ConfirmOrder};