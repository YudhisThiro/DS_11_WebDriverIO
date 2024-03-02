const { Given, When, Then } = require('@wdio/cucumber-framework');
//import { expect, $ } from '@wdio/globals'

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');


Given(/^YudhisThiro is on the login page$/, async () => {
    await loginPage.open()
})

When(/^YudhisThiro login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^YudhisThiro is on the login page$/, async () => {
    await HomePage.validateHomePage()
})

Then(/^YudhisThiro should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})





