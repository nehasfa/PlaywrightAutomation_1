const { test, expect } = require('@playwright/test');
const { POManager } = require('../tests/PageObjects/POManager')
//JSON->string->js object
const dataset = JSON.parse(JSON.stringify(require('../Utils/Registrationtestdata.json')))



test.setTimeout(180000);

test('@Athlete Registration test', async ({ page }) => {

  const pomanager = new POManager(page, dataset.Month, dataset.Date, dataset.Year, dataset.Firstname, dataset.Lastname, dataset.Email);

  const loginPage = pomanager.getLoginpage();
  await loginPage.goto();



  // Login Page Interactions
  await loginPage.ASRadiobutton();
  await loginPage.Registeredcity();
  await loginPage.Registermobileinput();
  await loginPage.Registerbutton();

  // Dashboard Page Interactions
  const dashboardPage = pomanager.getDashboardPage();

  // Step 1: Fill student details
  await dashboardPage.step1studentdetails();
  await dashboardPage.FillAthletedetails(dataset.Year, dataset.Month, dataset.Date, dataset.Firstname, dataset.Lastname, dataset.Email);
  await dashboardPage.step1submitbutton();
  await dashboardPage.step1studentdetailsagain();

  // Step 2: Select shooting sport
  await dashboardPage.selectsportshooting();

  // Step 3: Add expansion pack
  await dashboardPage.step3Expansionpack();

  await dashboardPage.Reviewcheckout();

  await dashboardPage.Mandatorycheckbox();

  await dashboardPage.Continuepayment();


  const paymentOptions = pomanager.getPaymentoptions(page);
  await paymentOptions.NetBankingPayment();

  const myorders = pomanager.getMyorders();
  await myorders.Profileiconbutton();
  await myorders.Myordersbutton();
  // await myorders.Withdrawparticipation();
  // await myorders.Cancelreason();
  //await myorders.Examreason();
  //await myorders.Invoice();


});
