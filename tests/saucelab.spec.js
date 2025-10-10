import {test, expect } from "@playwright/test"

import logincredentials from "../TestData/sauce lab.json"

test("verify the login functionalities of saucelab of username standard_user", async ({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/')

    await page.locator('//input[@placeholder="Username"]').fill(logincredentials.username1)

    await page.locator('//input[@placeholder="Password"]').fill(logincredentials.password)

    await page.locator('#login-button').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})

test("verify the login functionalities of saucelab of username locked_out_user", async ({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/')

    await page.locator('//input[@placeholder="Username"]').fill(logincredentials.username2)

    await page.locator('//input[@placeholder="Password"]').fill(logincredentials.password)

    await page.locator('#login-button').click()

    await expect(page.locator('h3[data-test="error"]')).toBeVisible()
})


test("verify the login functionalities of saucelab of username problem_user", async ({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/')

    await page.locator('//input[@placeholder="Username"]').fill(logincredentials.username3)

    await page.locator('//input[@placeholder="Password"]').fill(logincredentials.password)

    await page.locator('#login-button').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})


test("verify the login functionalities of saucelab of username performance_glitch_user", async ({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/')

    await page.locator('//input[@placeholder="Username"]').fill(logincredentials.username4)

    await page.locator('//input[@placeholder="Password"]').fill(logincredentials.password)

    await page.locator('#login-button').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})