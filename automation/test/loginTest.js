const { Builder, Capabilities } = require('selenium-webdriver');
const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const config = require('../config/config');
const LoginPage = require('../pages/loginPage');
const loginData = require('../data/login');

let driver;
let loginPage;

beforeEach(async function () {
    const capabilities = Capabilities[config.browser]();
    driver = await new Builder().withCapabilities(capabilities).build();
  
    loginPage = new LoginPage(driver);
    //homePage = new HomePage(driver);
  });

afterEach(async function () {
    await driver.quit();
})

describe('Login Test', function(){
    it('Should login successfully', async function (){
        await loginPage.login(loginData.validCredentials.username,loginData.validCredentials.password);
    })

    it('Should fail the login', async function(){
        await loginPage.login(loginData.invalidCredentials.username,loginData.invalidCredentials.password);
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).to.contain('Username or password is invalid');
    })
})