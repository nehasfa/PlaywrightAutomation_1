const { Given, When, Then } = require('@cucumber/cucumber');

// Step: Click on Step 1 and navigate to student details
Given('Click on step1 your details',{timeout: 15000}, async function () {
  // Access loginPage from POManager
  const loginPage = this.pomanager.getLoginpage();
  await loginPage.goto();                  // Navigate to the login page
  await loginPage.asradiobutton();        // Select radio button
  await loginPage.registeredcity();       // Select registered city
  await loginPage.registermobileinput();
  await loginPage.registerbutton();
  
  // Access dashboardPage from POManager
  const dashboardPage = this.pomanager.getDashboardPage();
  await dashboardPage.step1studentdetails(); // Navigate to step1 details
});

// Step: Fill athlete details
When('Fill athlete details',{timeout: 20000}, async function () {
  // Access dashboardPage from POManager
  const { Firstname, Lastname ,Schoolname, Email, Year, Month, Date } = this.pomanager.athleteDetails;
  
  const dashboardPage = this.pomanager.getDashboardPage();

  // Fill athlete details dynamically from dataset
  await dashboardPage.fillAthletedetails(Firstname, Lastname, Schoolname, Email, Year, Month, Date);
});

// Step: Submit details and navigate back to step1
Then('Click on submit button',{timeout: 15000}, async function () {
  const dashboardPage = this.pomanager.getDashboardPage();
  await dashboardPage.step1studentdetailsagain(); // Verify navigation back to details
  await dashboardPage.step1submitbutton();   
});
