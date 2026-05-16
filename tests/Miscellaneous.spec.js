const { test, expect } = require("@playwright/test");

test("@Web MoreValidations", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.screenshot({ path: 'FullPageBeforeHidden.png', fullPage: true })
    await page.locator("#displayed-text").screenshot({ path: 'ElementGettingHidden.png' })
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'FullPage-afterHidden.png' })
    await expect(page.locator("#displayed-text")).toBeHidden();

    //await page.pause();
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog => dialog.accept());
    //page.pause();
    page.locator("#mousehover").hover();


    const framelocator = page.frameLocator("#courses-iframe");
    await framelocator.getByRole("link", { name: "All Access plan" }).click();
    const textcheck = await framelocator.locator(".text h2").textContent();
    console.log(textcheck.split(" ")[1]);

});

test('VisualScreenshotValidations', async ({ page }) => {

    await page.goto("https://www.indiapost.gov.in/");
    expect(await page.screenshot()).toMatchSnapshot('Landing.png');



}
)