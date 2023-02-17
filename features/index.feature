Feature: index.html page

    Testing index.html for CucumberSandwich Project

Scenario: Test the browser title
Given a fresh load of the page
Then the browser title should be "Testing a Cucumber Sandwich"

Scenario: Test the page title
Given a fresh load of the page
Then the heading of the page should be "The Founder Members of the Football League"

Scenario: Content div is not populated on page load
Given a fresh load of the page
Then the content div should contain ""

Scenario: Content div is populated on button click
Given a fresh load of the page
When the populate button is clicked
Then the content div is populated

Scenario: Background colour changes on button click
Given a fresh load of the page
When the populate button is clicked
And the change button is clicked
Then the background colour of the content div is "darkblue"