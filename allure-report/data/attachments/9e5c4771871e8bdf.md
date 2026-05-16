# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> End to End product order
- Location: tests\endtoend.spec.js:4:6

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
  1  | const {expect,test} = require('@playwright/test');
  2  |  
  3  |  
  4  | test.only('End to End product order',async ({browser})=>//anonymous function
  5  |                                             //page is the global/playwright fixture
  6  |                                             //page is the global gixtuer, which will create
  7  |                                             //new browser instance and new page
  8  | {
  9  |  
  10 | const context =await browser.newContext();
  11 | const page =await context.newPage();
  12 |  
  13 | // await page.goto("https://rahulshettyacademy.com/client/#/auth/register/");await page.locator(".text-reset").click();
  14 | await page.goto("https://rahulshettyacademy.com/client/");
  15 | const email ="hamed@gmail.com";
  16 | await page.locator("[type='email']").fill(email);
  17 | await page.locator("[type='password']").fill("Learning@123");
  18 | await page.locator("#login").click();
  19 | await page.waitForLoadState('networkidle');// wait until the network is idle
  20 | const products = page.locator(".card-body");
  21 | await products.first().waitFor();// wait for the element to be loaded,visible
  22 |  
  23 | const prouductName = "ZARA COAT 3";
  24 |  
  25 | const count =await products.count();
  26 | console.log(count);
  27 | console.log(await products.allTextContents());
  28 |  
  29 | for(let i =0;i<count;++i)
  30 | {
  31 |     if(await products.nth(i).locator("b").textContent()=== prouductName)
  32 |     {
  33 |         await products.nth(i).locator("text= Add to Cart").click();
  34 |         break;
  35 |     }
  36 | }
  37 | //await page.pause();
  38 |  
  39 | await page.locator("[routerlink*='cart']").click();
  40 | await page.locator("li div").first().isVisible();
  41 | const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  42 | console.log(bool);
  43 | console.log(await page.locator("h3:has-text('ZARA COAT 3')").textContent());
> 44 | expect(bool).toBeTruthy();
     |              ^ Error: expect(received).toBeTruthy()
  45 | await page.locator("text=Checkout").click();
  46 | await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});//type slowly by keeping 150
  47 | const dropdown=page.locator(".ta-results");
  48 | await dropdown.waitFor();
  49 | const optionsCount = await dropdown.locator("button").count();
  50 | for(let i=0;i<optionsCount;++i){
  51 |   const text=  await dropdown.locator("button").nth(i).textContent();
  52 |  
  53 |   if(text===" India"){
  54 |     await dropdown.locator("button").nth(i).click();
  55 |     break;
  56 |   }
  57 | }
  58 | //await page.pause();
  59 |  
  60 | await expect(page.locator(".user__name [type='text']").first(),{timeout:2000}).toHaveText(email);
  61 | await page.locator(".action__submit").click();
  62 | await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  63 | const orderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  64 | console.log(orderID);
  65 |  
  66 | await page.locator("text=  ORDERS").first().click();
  67 | await page.locator("tbody").waitFor();
  68 |  
  69 | const rows =  page.locator("tbody tr");
  70 |  
  71 | for(let i=0;i<await rows.count();++i){
  72 |    const rowOrderID= await rows.nth(i).locator("th").textContent();
  73 |     if (orderID.includes(rowOrderID)){
  74 |         await rows.nth(i).locator("button").first().click();
  75 |         break;
  76 |     }
  77 | }
  78 | const orderIDDetails = await page.locator(".col-text").textContent();
  79 | console.log("Order received at the end:  ");
  80 |     console.log(orderIDDetails);
  81 | expect(orderID.includes(orderIDDetails)).toBeTruthy();
  82 |  
  83 |  
  84 | }
  85 | )
```