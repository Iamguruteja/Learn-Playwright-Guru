import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('img').nth(3).click();
  await page.getByText('Text Box').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('anil');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('anil123@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('abc');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('xyz');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:anil')).toBeVisible();
});