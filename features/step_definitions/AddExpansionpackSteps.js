const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('Navigate to the login page', async function () {
    // Login using the page object methods
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();
});
When ('enter mobilenumber {string} and otp {string}', async function (MobileNumber,Otp) {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.validLogin(MobileNumber,Otp);
});
Then ('click on submit OTP', async function () {
    const loginPage = this.pomanager.getLoginpage();
    await loginPage.submitotp();
});
Then ('click on Exapansion pack banner', async function () {
    const addexpansionpack = this.pomanager.getAddExpansionpack();
    await addexpansionpack.expansionpackbanner();
});
Then ('add Exapansion into the cart', async function () {
    const addexpansionpack = this.pomanager.getAddExpansionpack();
    await addexpansionpack.bronzepackage();
    
});


