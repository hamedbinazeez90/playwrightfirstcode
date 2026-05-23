const { test, expect } = require('@playwright/test');

const GOOGLE_URL = 'https://www.google.com/';
const SEARCH_BUTTON_SELECTOR = '[value="Google Search"]';
test.beforeAll(async () => {
  console.log('This will run before all tests');
});

test.beforeEach('before each test', async ({ page }) => {
  await page.goto(GOOGLE_URL);
});

test('locator visibility test - Google Search button', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
});

test('locator visibility test - Sign in link', async ({ page }) => {
  await expect(page.getByText('Sign in')).toBeVisible();
});

test.afterEach('after each test', async ({ page }) => {
  await page.close();
});

test.afterAll(async () => {
  console.log('This will run after all tests');
});
