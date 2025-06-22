import { test, expect } from '@playwright/test';

test('Show Characters Pagination', async ({ page }) => {

  // Test end-to-end

  await page.goto('http://localhost:5173/');

  await page.waitForSelector('.character');
  const characters = await page.locator('.character').all();
  const navigation = await page.locator("#navigation ul li").all()

  await expect(characters.length > 0).toBeTruthy()
  await expect(navigation.length > 0).toBeTruthy()
});


