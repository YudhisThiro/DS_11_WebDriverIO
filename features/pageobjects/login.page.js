const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    btnlogin: $('#login-button'),
    errorLockedOutUser = (dynamicMessage) => $('//h3[text()="${dynamicMesage}"]')


}
 
class LoginPage extends Page {
    async login (username) {
         await this.fieldUsername.waitForDisplayed({timeout: 2500});
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
}
    
    async validateLockedOutError (message){
        await element.errorLockedOutUser.waitForDisplayed({timeout: 2500});
        await expect(element.errorLockedOutUser).toBeDisplayed()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
