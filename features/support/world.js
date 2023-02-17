// Load requirements
const cucumber = require("@cucumber/cucumber");

// Declare class
class CustomWorld {
    constructor() {
        
        this.thrown = false;
    }

    hasThrown() {
        return this.thrown;
    }

    itThrew() {
        this.thrown = true;
    }
}

cucumber.setWorldConstructor(CustomWorld);