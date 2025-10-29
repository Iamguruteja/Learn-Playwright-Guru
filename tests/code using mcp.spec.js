const { test, expect } = require('@playwright/test');

test('login to OrangeHRM demo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.click('button[type="submit"]'),
    ]);

    // Verify successful login (dashboard loaded)
    await expect(page).toHaveURL(/dashboard/);
    //await expect(page.getByText('Dashboard')).toBeVisible();
});
