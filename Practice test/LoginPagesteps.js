const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright'); // Correctly import Playwright's chromium
const { POManager } = require('../tests/PageObjects/POManager'); // Correct path to POManager
const dataset = require('../Utils/LoginPagetestdata.json'); // Import the dataset correctly

Given('Login athlete profile with {string} and {string}', { timeout: 100 * 1000 }, async function (MobileInput, Otp) {
  // Login using the page object methods
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();
  await loginPage.validLogin(MobileInput, Otp);
});

When('Add sports into the cart', { timeout: 100 * 1000 }, async function () {
  // Navigate to the dashboard and perform actions
  const profilePage = this.pomanager.getProfilepage();
  await profilePage.addMoreSports();

  const dashboardPage = this.pomanager.getDashboardPage();
  await dashboardPage.selectSportAthletics(dataset.Sport); // Ensure "Sport" exists in the dataset
});

Then('Verify sport is displayed in the cart', async function () {
  const dashboardPage = this.pomanager.getDashboardPage();
  await dashboardPage.Reviewcheckout();
});

When('Enter valid details and place order', { timeout: 100 * 1000 }, async function () {
  const dashboardPage = this.pomanager.getDashboardPage();
  await dashboardPage.Showdetailsfirst();
  await dashboardPage.Mandatorycheckbox();
  await dashboardPage.Continuepayment();

  const paymentOptions = this.pomanager.getPaymentoptions();
  await paymentOptions.NetBankingPayment();
});

Then('Verify order present in My orders page', { timeout: 100 * 1000 }, async function () {
  const myOrdersPage = this.pomanager.getMyorders();
  await myOrdersPage.Profileiconbutton();
  await myOrdersPage.Myordersbutton();
  //await myOrdersPage.Withdrawparticipation();
  //await myOrdersPage.Cancelreason();
  // await myOrdersPage.Examreason();
  //await myOrdersPage.Invoice();

  // Close the browser after completing the test
  //await this.browser.close();
});
