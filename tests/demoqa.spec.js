import { test, expect } from '@playwright/test'

import data from "../TestData/Demoqa.json"

test("verify Demo QA Text box fields", async ({ page }) => {

    await page.goto('https://demoqa.com/')

    await page.locator('svg[stroke="currentColor"]').first().click()

    await page.locator('//span[text()="Text Box"]').click()

    await expect(page).toHaveURL('https://demoqa.com/text-box')

    // //fill
    // await page.locator('#userName').fill("D.T Guruteja")

    // // pressSequentially
    await page.locator('#userName').pressSequentially(data.fullname, { delay: 1000 })

    //let r = (Math.random() + 1).toString(36).substring(7)
    // let emailid="TestEmail"+r+"@gmail.com"
    // console.log(emailid)

    await page.locator('#userEmail').fill(data.email)

    await page.locator('#currentAddress').fill(data.currentaddress)

    await page.locator('#permanentAddress').fill(data.permanentaddress)

    await page.locator('#submit').click()

    //toHaveText

    await expect(page.locator('#name')).toHaveText("Name: D.T Guruteja")

    //toContainText


    await expect(page.locator('#name')).toContainText("D.T Guruteja")


})