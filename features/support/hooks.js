const { chromium } = require('playwright');
const { POManager } = require('../../tests/PageObjects/POManager');
const { Before } = require('@cucumber/cucumber');
const athleteDetails = require('../../Utils/Registrationtestdata.json').athleteDetails; // Import data

Before(async function () {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Pass athleteDetails dynamically to POManager
  this.pomanager = new POManager(page, athleteDetails);
  this.browser = browser;
  this.context = context;
  this.page = page;
});

