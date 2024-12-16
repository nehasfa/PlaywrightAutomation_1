const { test, expect } = require('@playwright/test');
const { POManager } = require('../tests/PageObjects/POManager')
//JSON->string->js object
const dataset = JSON.parse(JSON.stringify(require('../Utils/LoginPagetestdata.json')))

test.setTimeout(180000);

const exp = require('constants');
const { log } = require('console');



test('@Login page test', async ({ page }) => {
  const pomanager = new POManager(page);

  const loginPage = pomanager.getLoginpage();
  await loginPage.goto();
  await loginPage.validLogin(dataset.MobileInput, dataset.Otp);


  const profilepage = pomanager.getProfilepage();
  await profilepage.addMoreSports();

  const dashboardpage = pomanager.getDashboardPage();
  await dashboardpage.selectSportAthletics(dataset.Sport);
  await dashboardpage.Reviewcheckout();
  await dashboardpage.Showdetailsfirst();
  await dashboardpage.Mandatorycheckbox();
  await dashboardpage.Continuepayment();

  const paymentOptions = pomanager.getPaymentoptions();
  await paymentOptions.NetBankingPayment();

  const myorders = pomanager.getMyorders();
  await myorders.Profileiconbutton();
  await myorders.Myordersbutton();
  //await myorders.Withdrawparticipation();
  //await myorders.Cancelreason();
  //await myorders.Examreason();
  // myorders.Invoice();

}); 
