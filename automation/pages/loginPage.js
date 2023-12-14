const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = '/signin';
        this.errorMessageSelector = By.className('MuiAlert-message');
    }

    async login(username, password) {
        await this.visit();
        await this.driver.findElement(By.id('username')).sendKeys(username);
        await this.driver.findElement(By.xpath(`//input[@name='password']`)).sendKeys(password);
        await this.driver.findElement(By.css(`button[data-test='signin-submit']`)).click();
    }

    async getErrorMessage() {
        const errorMessageElement = await this.driver.findElement(this.errorMessageSelector);
        return errorMessageElement.getText();
    }
}

module.exports = LoginPage;