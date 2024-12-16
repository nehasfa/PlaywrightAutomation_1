const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../tests/PageObjects/POManager');
const dataset = require('../Utils/Registrationtestdata.json');

// Step: Register as an athlete
Given('Register as a athlete for pune city', { timeout: 100 * 1000 }, async function () {
  this.loginPage = this.pomanager.getLoginpage();
  await this.loginPage.goto();
  await this.loginPage.ASRadiobutton();
  await this.loginPage.Registeredcity();
});

// Step: Enter mobile number and click register
When('Enter mobile number and click on register button', { timeout: 100 * 1000 }, async function () {
  await this.loginPage.Registermobileinput();
  await this.loginPage.Registerbutton();
  this.dashboardPage = this.pomanager.getDashboardPage();
});

// Step: Fill athlete details
Then('Fill the athlete details', { timeout: 120 * 1000 }, async function () {
  const { Year, Month, Date } = dataset;

  if (!Year || !Month || !Date) {
    throw new Error('Invalid dataset: Year, Month, or Date is missing');
  }

  await this.dashboardPage.step1studentdetails(Year, Month, Date);
  await dashboardPage.step1submitbutton();
});

// Step: Add sports to the cart
When('Add sports into the cart for athlete registration', { timeout: 100 * 1000 }, async function () {
  await this.dashboardPage.step1studentdetailsagain();
  await this.dashboardPage.selectsportshooting();
});

// Step: Add expansion pack
When('Add expansion pack into the cart', { timeout: 100 * 1000 }, async function () {
  await this.dashboardPage.step3Expansionpack();
});

// Step: Verify cart contents
Then('Verify sport and exapnsion pack is displayed in the cart', { timeout: 100 * 1000 }, async function () {
  await this.dashboardPage.Reviewcheckout();
});

// Step: Place order
When('Enter valid athlete details and place order', { timeout: 100 * 1000 }, async function () {
  await this.dashboardPage.Mandatorycheckbox();
  await this.dashboardPage.Continuepayment();

  this.paymentOptions = this.pomanager.getPaymentoptions();
  await this.paymentOptions.NetBankingPayment();
});

// Step: Verify My Orders page
Then('Verify My orders page', { timeout: 100 * 1000 }, async function () {
  this.myOrdersPage = this.pomanager.getMyorders();
  await this.myOrdersPage.Profileiconbutton();
  await this.myOrdersPage.Myordersbutton();
});
