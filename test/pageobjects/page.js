import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        switch(path){
            case "login":
                return browser.url(`https://the-internet.herokuapp.com/${path}`)
            case "registration":
                return browser.url(`https://magento.softwaretestingboard.com/customer/account/create/`)
        }
    }
}
