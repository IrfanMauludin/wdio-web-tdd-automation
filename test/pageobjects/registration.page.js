import {$} from "@wdio/globals"
import Page from "./page.js"

class RegistrationPage extends Page{

    get firstNameErrorMsg(){
        return $('#firstname-error');
    }

    get createAnAccountBtn(){
        return $('//button[@class="action submit primary"]');
    }

    async clickCreateAccountBtn(){
        await this.createAnAccountBtn.click();
    }

    open(){
        return super.open('registration')
    }
}

export default new RegistrationPage();