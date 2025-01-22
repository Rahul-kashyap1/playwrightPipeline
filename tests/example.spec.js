// @ts-check
const { test, expect } = require('@playwright/test');

test('verify google title', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('Verify facebook title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook – log in or sign up/);
});

