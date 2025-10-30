import {test, expect} from '@playwright/test'

test("verify the add employees functionalities", async ({ page }) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill(process.env.APP_USERNAME)
    await page.locator("input[type='password']").fill(process.env.APP_PASSWORD)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
    await page.locator('//a[text()="Add Employee"]').click()
    await page.locator('input[name="firstName"]').fill('guruteja')
    await page.locator('input[name="lastName"]').fill("dodda thimmappa")
    let r = (Math.random() + 1).toString(36).substring(7)
    await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill(r)

    //upload file 
    await page.locator('input[type="file"]').setInputFiles('TestData/upload file/Virat Kohli aggressive_ (TEST).jpeg')
    await page.locator('button[type="submit"]').click()
    
    await expect(page.locator('//a[text()="Personal Details"]')).toBeVisible()

})

