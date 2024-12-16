const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('Go to login page', { timeout: 10000 }, async function () {
    // Login using the page object methods
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();
});
When ('Fill mobilenumber {string} and otp {string}', { timeout: 10000 }, async function (Mobilenumber,Otp) {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.validLogin(Mobilenumber,Otp);
});
Then ('Click on submit OTP',{ timeout: 10000 }, async function () {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.submitotp();
});
Then ('Click Add more sports and add sport event into the cart', { timeout: 10000 }, async function () {
    const profilepage = this.pomanager.getProfilepage();
    await profilepage.addMoreSports();
    const addsports = this.pomanager.getAddsports();
    await addsports.selectsportshooting();

});
