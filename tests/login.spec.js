import {test, expect } from '@playwright/test'

test("verify the login with valid functionalities", async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})


test("verify the login with valid Username and invalid password", async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator("input[type='password']").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})


test("verify the login with Invalid Username and Valid password", async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Adminn')
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})


test("verify the login with Invalid Username and Invalid password", async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Adminn')
    await page.locator("input[type='password']").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

