const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('@Athlete Registration test', async ({ page }) => {
  // Increase test timeout (if required)
  viewport: null;
  test.setTimeout(120000); // 60 seconds

  // Navigate to the SFA login URL
  await page.goto("https://stage.sfaplay.com/championship/login")

  
  await page.locator('input[type="radio"]').nth(1).check();
  await page.waitForTimeout(2000);
  await page.locator('input[type="radio"]').nth(0).check();
  await page.waitForTimeout(2000);
  
  await page.locator('.mb-1').first().click();
  await page.waitForTimeout(2000);

  const RegistermobileInput = page.locator('form').filter({ hasText: 'Enter your mobile number' }).getByPlaceholder("9900 0000 00");

  await RegistermobileInput.fill("3333333378");

  const RegisterButton = page.getByRole("button", {name: 'Register'});
  await expect(RegisterButton).toBeVisible({timeout: 2000});
  await RegisterButton.click();
  
  const athletedetails = page.getByRole("button",{name: 'Step 1: Your Details'});
  await expect(athletedetails).toBeVisible({timeout: 2000});
  await athletedetails.click();
 
 //Enter Athlete first name 
  const StudentFname = page.locator('input[autocomplete="first-name"]');
  await expect(StudentFname).toBeVisible({timeout: 2000});
  await StudentFname.fill('AutouserNehaOne');

  //Enter Athlete last name 

  const StudentLname = page.locator('input[name="last_name"]');
  await expect(StudentLname).toBeVisible();
  await StudentLname.fill('Jundare');

  //Enter Athlete school name
 const SchoolName =  page.locator('.autocomplete-input');
 await expect(SchoolName).toBeVisible({timeout: 2000});
 await SchoolName.pressSequentially('c');

 const Schooldropdown = page.locator('.suggestions-list');
 await Schooldropdown.waitFor();

 const optionscount = await page.locator('.suggestions-list-item ').count();
 for(let i=0; i<= optionscount; ++i)
 {
    const text = await Schooldropdown.locator(".suggestions-list-item").nth(i).textContent();
   if(text === "Ces' Prerana Primary School, Nigdi-Pradhikaran")
   {
     await Schooldropdown.locator(".suggestions-list-item").nth(i).click();
    break;
   }
 }

 //select athlete gender

 const genderDropdown = page.getByRole("button", { name: 'Select Gender' });
 await expect(genderDropdown).toBeVisible({ timeout: 2000 });
 await genderDropdown.click();

 const genderSelect = page.locator('li', { hasText: 'female' });
 await expect(genderSelect).toBeVisible({ timeout: 2000 });
 await genderSelect.click();

 await page.waitForTimeout(2000);

 //select athlete DOB

 const month = "10";
 const year = "2011";
 const date = "10"

 await page.locator('.form-control').click();
 await page.locator('.rdtSwitch').click();
 await page.locator('.rdtSwitch').click();
 await page.locator('th.rdtPrev').click();
 await page.getByText(year).click();
 await page.locator('.rdtMonth').nth(Number(month-1)).click();
 await page.locator(`td[data-value="${date}"]`).click();

//Select nationality
await page.locator('input[value="NRI"]').check();

//Enter Athlete email id

const AthleteEmailid =  page.locator('input[name="email"]');
await expect(AthleteEmailid).toBeVisible({timeout: 2000});
await AthleteEmailid.fill('test@gmail.com');

//click on GET otp

 const getotp = page.getByRole("button",{name: 'GET OTP'});
 await expect(getotp).toBeVisible({timeout: 2000});
 getotp.click();
 await page.waitForTimeout(2000);

 //enter otp

 const otp = page.locator('input[name="otp"]');
 await expect(otp).toBeVisible({timeout: 2000});
 await otp.fill('1042');
 
 //click on confirm & proceed
 const ConfirmOtp= page.getByRole("button",{name: 'Confirm & Proceed'});
 await expect(ConfirmOtp).toBeVisible({timeout: 2000});
 await ConfirmOtp.click();

 //Click on step1:your details button
 const athleteDetails = page.getByRole("button",{name: 'Step 1: Your Details'});
 await expect(athleteDetails).toBeVisible({timeout: 2000});
 await athletedetails.click();
 
 //Click on submit button
 const SubmitButton = page.getByRole("button",{name: 'SUBMIT'});
 await expect(SubmitButton).toBeVisible({timeout: 2000});
 await SubmitButton.click();
 await page.waitForTimeout(2000);

 //click on  step2:select sport event
 const Step2SelectSportEvent = page.getByRole("button",{name: 'Step 2: Select Sport Event'});
 await expect(Step2SelectSportEvent).toBeVisible({timeout: 2000});
 await Step2SelectSportEvent.click();
 await page.waitForTimeout(2000);

 //select sport dropdown
 const SportDropdown = page.getByRole("button",{name: 'Athletics'});
 await expect(SportDropdown).toBeVisible({timeout: 2000});
 await SportDropdown.click();
 await page.waitForTimeout(2000);

 //Select sport shooting
 const Shooting = page.getByRole('option', { name: 'Shooting' });
 await expect(Shooting).toBeVisible({timeout: 2000});
 await Shooting.click();
 await page.waitForTimeout(2000);

 //add opensight into the cart
 const OpenSight = page.locator('.h-20 ').first();
 await expect(OpenSight).toBeVisible({timeout: 2000});
 await OpenSight.click();
 await page.waitForTimeout(2000);

//Click on step3 Expansion Pack
 const Step3ExapnsionPack = page.getByRole("button",{name: 'Step 3: Select Expansion Pack'});
 await expect(Step3ExapnsionPack).toBeVisible({timeout: 2000});
 await Step3ExapnsionPack.click();
 await page.waitForTimeout(2000);

//add bronze package into the cart
const BronzePackage = page.getByRole("button",{name: 'Add to Cart'}).nth(1);
await expect(BronzePackage).toBeVisible({timeout: 2000});
await BronzePackage.click();
await page.waitForTimeout(2000);

//click on expansion pack popup ok button
const ExpansionPackaPopup = page.getByRole("button",{name: 'OK'});
await expect(ExpansionPackaPopup).toBeVisible({timeout: 2000});
await ExpansionPackaPopup.click();
await page.waitForTimeout(2000);

// Click on show details sport
await page.getByRole("button", { name: 'Show Details' }).first().click();

// Click on show details expansion pack
await page.getByRole("button", { name: 'Show Details' }).last().click();

// Click on mandatory checkbox (Terms & Conditions)
await page.locator('input[type="checkbox"]').nth(1).check();

// Click on continue to payment button
const continueToPaymentButton = page.getByRole("button", { name: 'Continue To Payment' });
await expect(continueToPaymentButton).toBeVisible();
await continueToPaymentButton.click();


});