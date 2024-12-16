const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('athlete on login page', async function () {
      // Login using the page object methods
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();
});
 When ('login with mobilenumber {string} and otp {string}', async function (MobileNumber,Otp) {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.validLogin(MobileNumber,Otp);
});
Then ('submit OTP', async function () {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.submitotp();
});
Then ('click on your orders', async function () {
    const profilePage = this.pomanager. getProfilepage();
    await profilePage.yourorders();
});
