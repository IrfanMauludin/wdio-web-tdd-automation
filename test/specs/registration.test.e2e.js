import RegistrationPage from "../pageobjects/registration.page.js";
import {expect} from "@wdio/globals"

describe('Registration end to end test', () => {
    it('should failed when all mandatory field left blank', async () => {
        await RegistrationPage.open();
        await RegistrationPage.clickCreateAccountBtn();
        await expect(RegistrationPage.firstNameErrorMsg).toBeExisting();
    })
})