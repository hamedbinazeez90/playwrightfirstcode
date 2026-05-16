const {test,expect} = require("@playwright/test");
const { timeStamp } = require("console");
 
 
test("@Web Calendar validations",async({page})=>
{
 
    const monthNumber = "5";
    const date = "2";
    const year = "2026";
    const expectedList = [monthNumber,date,year];
   
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
  await page.screenshot({path: 'C:/Hamed/PlayWrightAutomation/screenshots/calendar.png',fullPage:true})

    const inputs =  page.locator('.react-date-picker__inputGroup__input')//textbox has 
    //value as 2026-05-02
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        console.log(value)
        expect(value).toEqual(expectedList[i]);

 
    }
}
)