# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAPPPO.spec.js >> Client App Login
- Location: tests\ClientAPPPO.spec.js:50:18

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
        - /url: https://techsmarthire.com/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart 1" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
            - generic [ref=e22]: "1"
        - listitem [ref=e23] [cursor=pointer]:
          - button "Sign Out" [ref=e24]:
            - generic [ref=e25]: 
            - text: Sign Out
    - generic [ref=e26]:
      - generic [ref=e27]:
        - heading "My Cart" [level=1] [ref=e28]
        - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
      - list [ref=e31]:
        - listitem [ref=e32] [cursor=pointer]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
              - heading "ZARA COAT 3" [level=3] [ref=e36]
              - paragraph [ref=e37]: MRP $ 11500
              - paragraph [ref=e38]: In Stock
            - paragraph [ref=e40]: $ 11500
            - generic [ref=e41]:
              - button "Buy Now❯" [ref=e42]
              - button "❯" [ref=e43]:
                - generic [ref=e44]: 
                - text: ❯
      - list [ref=e46]:
        - listitem [ref=e47]:
          - generic [ref=e48]: Subtotal
          - generic [ref=e49]: $11500
        - listitem [ref=e50]:
          - generic [ref=e51]: Total
          - generic [ref=e52]: $11500
        - listitem [ref=e53]:
          - button "Checkout❯" [ref=e54] [cursor=pointer]
  - alert "Product Added To Cart" [ref=e56]
```

# Test source

```ts
  1  | class AddToCart{
  2  |  
  3  | constructor(page){
  4  |  
  5  | this.page = page;
  6  | this.allitems = page.locator("li div");
  7  | //this.product = page.locator("h3:has-text('ZARA COAT 3')");
  8  | this.checkout = page.locator("text=Checkout");
  9  | this.country = page.locator("[placeholder='Select Country']");
  10 | this.dropdown = page.locator(".ta-results");
  11 | this.selectcountryoption = page.locator(".ta-results button");
  12 |  
  13 | }
  14 |  
  15 | async PlaceOrder(expect,prouductName)
  16 | {
  17 |   console.log("product received here in place order is "+prouductName)
  18 |  
  19 |     await this.allitems.first().isVisible();
  20 |     //const bool=await this.product.isVisible();
  21 |     const bool = await this.page.locator("h3:has-text('"+prouductName+"')").isVisible();
  22 |     console.log(bool);
  23 |     console.log(await this.page.locator("h3:has-text('"+prouductName+"')").textContent());
> 24 |     expect(bool).toBeTruthy();
     |                  ^ Error: expect(received).toBeTruthy()
  25 |     await this.checkout .click();
  26 |     await this.country.pressSequentially("ind",{delay:150});//type slowly by keeping 150
  27 |     const dropdown=this.dropdown;
  28 |     await dropdown.waitFor();
  29 |     const optionsCount = await dropdown.locator("button").count();
  30 |     for(let i=0;i<optionsCount;++i){
  31 |       const text=  await this.selectcountryoption.nth(i).textContent();
  32 |    
  33 |       if(text===" India"){
  34 |         await this.selectcountryoption.nth(i).click();
  35 |         break;
  36 |       }
  37 |     }
  38 | }
  39 |  
  40 | async clickPlace()
  41 | {
  42 |  
  43 |     await this.page.locator(".action__submit");
  44 |   //const bool = await this.page.locator("h3:has-text('"+productName+"')");
  45 |  
  46 | }
  47 |  
  48 | }
  49 |  
  50 | module.exports = {AddToCart};
```