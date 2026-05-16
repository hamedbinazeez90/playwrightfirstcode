import { test, expect } from '@playwright/test';

test('recording', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('tomato');
  await page.getByRole('cell', { name: 'Tomato' }).click();
  await page.getByRole('cell', { name: '37' }).click();
  await page.getByRole('cell', { name: '37' }).dblclick();
  await expect(page.locator('tbody')).toContainText('Tomato');
});