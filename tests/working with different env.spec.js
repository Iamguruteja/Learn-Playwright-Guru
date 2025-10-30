import { test, expect } from "@playwright/test"

import logininQA from "../TestData/QA data.json"
import logininUAT from "../TestData/UAT data.json"
import logininPROD from "../TestData/prod data.json"

test('verify working with different environment', async ({ page }) => {

    if (process.env.ENVIRONMENT === "QA") {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await page.locator('input[name="username"]').fill(logininQA.username)
        await page.locator("input[type='password']").fill(logininQA.password)
        await page.locator("//button[@type='submit']").click()
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    }
    else if (process.env.ENVIRONMENT == "UAT") {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await page.locator('input[name="username"]').fill(logininUAT.username)
        await page.locator("input[type='password']").fill(logininUAT.password)
        await page.locator("//button[@type='submit']").click()
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    }
    else {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await page.locator('input[name="username"]').fill(logininPROD.username)
        await page.locator("input[type='password']").fill(logininPROD.password)
        await page.locator("//button[@type='submit']").click()
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    }


})
