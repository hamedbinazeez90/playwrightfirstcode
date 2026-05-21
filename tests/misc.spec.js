const {test,expect} = require('@playwright/test')
test('misc ',async ({page})=>{
    page.goto('https://rahulshettyacademy.com/client/')
    const email ="hamed@gmail.com";
    await page.locator("[type='email']").fill(email);
    await page.locator("[type='password']").fill("Learning@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
  // Use the label text to reach the visible checkbox
await page.locator('//div//input[@type="checkbox"]').nth(11).check()
await expect(page.locator('//div//input[@type="checkbox"]').nth(11)).toBeChecked();
  // await expect(householdCheckbox).toBeChecked();
    await page.waitForTimeout(2000)

})