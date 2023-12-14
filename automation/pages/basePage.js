const config = require('../config/config');

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.url = '/';
    }

    async visit() {
        await this.driver.get(config.baseUrl + this.url);
    }
}

module.exports = BasePage;