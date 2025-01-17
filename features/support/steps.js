// Load requirements
const assert = require('assert');
const { Before, After, Given, When, Then } = require('@cucumber/cucumber');

// Closes headless browser after each scenario.
// I think would be more efficient to use an AfterAll hook here but
// the AfterAll hook does not have access to the custom world.
After(async function () {
    await this.driver.quit();
});


// Steps

Given("a fresh load of the page", function () {
    this.driver.get("http://127.0.0.1:5500/index.html");
});

When("the {word} button is clicked", async function (action) {
    switch(action) {
        case "populate":
            const populateButton = await this.getElement('populate-button');
            await populateButton.click();
            break;

        case "change":
            const changeButton = await this.getElement('change-button');
            await changeButton.click();
            break;

        default:
            throw new Error(`Unsupported action ${action}`);
    }
});

Then("the browser title should be {string}", async function(string) {
    const title = await this.driver.getTitle();
    assert(title == string);
})

Then("the heading of the page should be {string}", async function(string) {
    const element = await this.getElementByCss('h1');
    const title = await element.getText();
    assert(title == string);
})

Then('the content div should be {string}', async function(string) {
    const element = await this.getElement('content');
    const text = await element.getText();
    assert(text == string);
});

Then('the content div is populated', async function () {
    const element = await this.getElement('content');
    const text = await element.getText();
    assert(text != "");
  });

  Then('the background colour of the content div is {string}', async function (string) {
    const color = await this.elementBackground('content');
    assert(color == 'rgba(0, 0, 139, 1)'); //darkblue in rgba format
  });