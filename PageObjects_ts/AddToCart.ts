import {test,expect,Page, Locator} from '@playwright/test'

export class AddToCart{

    page : Page
    allitems:Locator;
    product:Locator;
    checkout:Locator;
    country:Locator;
    dropdown:Locator;
    selectcountryoption:Locator;


constructor(page:Page){

this.page = page;
this.allitems = page.locator("li div");
this.product = page.locator("h3:has-text('ZARA COAT 3')");
this.checkout = page.locator("text=Checkout");
this.country = page.locator("[placeholder='Select Country']");
this.dropdown = page.locator(".ta-results");
this.selectcountryoption = page.locator(".ta-results button");

}



async AddCartAndSelectCountry(expect:any)
{

    await this.allitems.first().isVisible();
    const bool=await this.product.isVisible();
    console.log(bool);
    console.log(await this.product.textContent());
    expect(bool).toBeTruthy();
    await this.checkout .click();
    await this.country.pressSequentially("ind",{delay:150});//type slowly by keeping 150
    const dropdown=this.dropdown;
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;++i){
      const text=  await this.selectcountryoption.nth(i).textContent();
    
      if(text===" India"){
        await this.selectcountryoption.nth(i).click();
        break;
      }
    }
}

}

//module.exports = {AddToCart};