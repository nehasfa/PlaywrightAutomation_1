const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../../tests/PageObjects/POManager');

// Step: Register as an athlete
Given('Register as a athlete', async function () {
    this.loginPage = this.pomanager.getLoginpage();
    await this.loginPage.goto();
    await this.loginPage.asradiobutton();
    await this.loginPage.registeredcity();
});

// Step: Enter mobile number
When('Enter mobile number', async function () {
    await this.loginPage.registermobileinput();
});

// Step: Click on register button
Then('Click on register button', async function () {
    await this.loginPage.registerbutton();
    this.dashboardPage = this.pomanager.getDashboardPage();
});