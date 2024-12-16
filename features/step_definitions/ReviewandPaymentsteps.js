const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('go to login page',{timeout: 12000}, async function () {
    // Login using the page object methods
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.goto();
});
When('type mobilenumber {string} and otp {string}', {timeout: 15000},async function (MobileNumber, Otp) {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.validLogin(MobileNumber, Otp);
});
Then('press submit OTP', async function () {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.submitotp();
});
When('go to Add more sports', async function () {
    const profilepage = this.pomanager.getProfilepage();
    await profilepage.addMoreSports();
});
Then('Click on review&Checkout', async function () {
    const cart = this.pomanager.getCart();
    await cart.reviewcheckout()
});
Then('Complete payment method', {timeout: 15000},async function () {
    const cart = this.pomanager.getCart();
    await cart.mandatorycheckbox();
    await cart.continuepayment();

  const paymentOptions = this.pomanager.getPaymentoptions();
  await paymentOptions.netBankingPayment()
});