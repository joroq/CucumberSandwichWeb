// Load requirements
require('chromedriver'); // So executable is available
const cucumber = require("@cucumber/cucumber");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Declare class
class CustomWorld {
    constructor() {
        // Construct headless browser as part of the cucumber world
        const options = new chrome.Options()
            .addArguments('--log-level=1')
            .headless()
            .setAcceptInsecureCerts(true)
            .windowSize({ width: 1920, height: 1200 });
        this.driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
    }

    /**
     * Convienience method for retrieving headless element by id
     */
    async getElement(id) {
        const selector = webdriver.By.id(id);
        return await this.driver.findElement(selector);
    }

    /**
     * Convienience method for retrieving headless element by CSS
     */
    async getElementByCss(css) {
        const selector = webdriver.By.css(css);
        return await this.driver.findElement(selector);
    }

    /**
     * Emulates clicking element of the specified id
     */
    async elementClick(id) {
        const element = await this.driver.getElement(id);
        element.click();
    }

    /**
     * Returns color of specified element as a string in the format:
     * 'rgba(<red>, <green>, <blue>, <alpha transparency>)'
     */
    async elementColor(id) {
        const element = await this.getElement(id);
        return await element.getCssValue('color');
    }

    /**
     * Returns css value of specified element
     */
    async elementBackground(id) {
        const element = await this.getElement(id);
        return await element.getCssValue('background-color');
    }
    

}

cucumber.setWorldConstructor(CustomWorld);