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

    async loginFull(username, password) {
        const userField = await this.driver.findElement(By.id('username'));
        const passwordField = await this.driver.findElement(By.xpath(`//input[@name='password']`));
        const loginButton = await this.driver.findElement(By.css(`button[data-test='signin-submit']`))
        await this.visit();
        await this.driver.actions()
            .move({origin: userField})
            .pause(1000)
            .press()
            .pause(1000)
            .sendKeys(username)
            .pause(1000)
            .move({origin: passwordField})
            .pause(1000)
            .press()
            .pause(1000)
            .sendKeys(password)
            .pause(1000)
            .move({origin: loginButton})
            .pause(1000)
            .press()
            .perform();
    }

    async getErrorMessage() {
        const errorMessageElement = await this.driver.findElement(this.errorMessageSelector);
        return errorMessageElement.getText();
    }
}

module.exports = LoginPage;