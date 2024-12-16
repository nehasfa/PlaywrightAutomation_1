const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('Go to athlete login page',{timeout: 6000}, async function () {
      // Login using the page object methods
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();
});
 When ('Enter mobilenumber {string} and otp {string}', async function (MobileNumber,Otp) {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.validLogin(MobileNumber,Otp);
});
Then ('Click on submit otp', async function () {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.submitotp();
});
Then ('Click Add more sports and add sport event into the cart',{timeout: 6000}, async function () {
    const profilepage = this.pomanager.getProfilepage();
    await profilepage.addMoreSports();
    const addsports = this.pomanager.getAddsports();
    await addsports.selectsportshooting();

});

