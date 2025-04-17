import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
// import registrationPage from '../pageobjects/registration.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
    it('should failed login with invalid credentials', async() => {
        await LoginPage.open()

        await LoginPage.login('johnsmith', 'mysecretPassword!')
        await expect(LoginPage.loginAlert).toBeExisting()
        await expect(LoginPage.loginAlert).toHaveText(
            expect.stringContaining('Your username is invalid!'))
    })
    // it('should failed login with empty credentials', async() => {
    //     await LoginPage.open()

    //     await LoginPage.login('','')
    //     await expect(LoginPage.loginAlert).toBeExisting()
    //     await expect(LoginPage.loginAlert).toHaveText(
    //         expect.stringContaining('Your username is invalid!'))
    // })
    it('should failed login with empty password', async() => {
        await LoginPage.open()

        await LoginPage.login('tomsmith','')
        await expect(LoginPage.loginAlert).toBeExisting()
        await expect(LoginPage.loginAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })
    it('should failed login with wrong password', async() => {
        await LoginPage.open()

        await LoginPage.login('tomsmith','PasswordSuperSecret!')
        await expect(LoginPage.loginAlert).toBeExisting()
        await expect(LoginPage.loginAlert).toHaveText(
            expect.stringContaining('Your password is invalid!'))
    })
})

// describe('Registration scheme', () => {
//     it('should failed if all mandatory field left blank', async() => {
//         await registrationPage.open();

//         await registrationPage.clickCreateAccountBtn();
//         await expect(registrationPage.firstNameErrorMsg).toBeExisting();
//     })
// })

