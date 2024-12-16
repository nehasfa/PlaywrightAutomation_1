class DashboardPage {
  constructor(page, year, month, date, firstname, lastname, email) {
    this.page = page;
    this.year = year;       // Store year
    this.month = month;     // Store month
    this.date = date;       // Store date
    this.firstname = firstname;   // Store first name
    this.lastname = lastname;     // Store last name
    this.email = email;

    // Locators
    this.Step1studentdetails = page.getByRole("button", { name: 'Step 1: Your Details' });
    this.studentfname = page.locator('input[autocomplete="first-name"]');
    this.studentlname = page.locator('input[name="last_name"]');
    this.studentschoolname = page.locator('.autocomplete-input');
    this.schooldropdown = page.locator('.suggestions-list');

    this.genderdropdown = page.getByRole("button", { name: 'Select Gender' });
    this.selectfemalegender = page.getByText('female');

    this.selectcalender = page.getByPlaceholder('DD-MM-YYYY');
    this.selectdecemberyear = page.getByRole('cell', { name: 'December' });
    this.selectyear = page.getByRole('cell', { name: '2024' });
    this.shiftprevyear = page.getByText('‹');
    this.getyear = page.getByRole('cell', { name: '2011' });
    this.selectmonth = page.getByRole('cell', { name: 'Oct' });
    this.selectdate = page.getByRole('cell', { name: '10' });

    
    this.selectnationality = page.locator('div').filter({ hasText: /^NRI$/ }).getByRole('radio');


    this.studentemailid = page.locator('input[name="email"]');

    this.getotp = page.getByRole("button", { name: 'GET OTP' });
    this.enterotp = page.locator('input[name="otp"]');

    this.confirmProceed = page.getByRole("button", { name: 'Confirm & Proceed' });

    this.submitbutton = page.getByRole("button", { name: 'SUBMIT' });

  }

  // Click on Step 1
  async step1studentdetails() {
    await this.Step1studentdetails.waitFor({ state: 'visible', timeout: 10000 });
    await this.Step1studentdetails.click();
  }

  // Step 1: Fill Student Details
  async fillAthletedetails(firstName, lastName, schoolName, email, year, month, date) {

    // Fill first and last name
    await this.studentfname.fill(firstName);
    await this.studentlname.fill(lastName);

    const filledFirstName = await this.studentfname.inputValue();
    const filledLastName = await this.studentlname.inputValue();
    if (filledFirstName !== firstName) {
      throw new Error(`First name was not filled correctly. Expected: ${firstName}, Found: ${filledFirstName}`);
    }
    if (filledLastName !== lastName) {
      throw new Error(`Last name was not filled correctly. Expected: ${lastName}, Found: ${filledLastName}`);
    }

    // Fill and select school
    await this.studentschoolname.fill(schoolName);
    await this.schooldropdown.waitFor({ state: 'visible', timeout: 5000 });
    const optionsCount = await this.schooldropdown.locator('.suggestions-list-item').count();
    let schoolFound = false;
    for (let i = 0; i < optionsCount; i++) {
      const text = await this.schooldropdown.locator('.suggestions-list-item').nth(i).textContent();
      if (text.trim() === schoolName) {
        await this.schooldropdown.locator('.suggestions-list-item').nth(i).click();
        schoolFound = true;
        break;
      }
    }
    if (!schoolFound) {
      throw new Error(`School ${schoolName} not found in the dropdown`);
    }

    const selectedSchool = await this.studentschoolname.inputValue();
    if (selectedSchool !== schoolName) {
      throw new Error(`School name was not filled correctly. Expected: ${schoolName}, Found: ${selectedSchool}`);
    }

    // Select gender
    await this.genderdropdown.click();
    await this.selectfemalegender.click();

    // const selectedGender = await this.genderdropdown.textContent();
    //if (!selectedGender.includes('female')) {
    // throw new Error(`Gender was not selected correctly. Expected: female, Found: ${selectedGender}`);
    //}

    // Select nationality
    await this.page.locator('input[value="NRI"]').check();

    // const selectedNationality = await this.selectnationality.isChecked();
    //if (!selectedNationality) {
    // throw new Error('Nationality was not selected correctly');
    //}

    // Open calendar and select year, month, and date 
    await this.selectcalender.click();
    await this.selectdecemberyear.click();
    await this.selectyear.click();
    await this.shiftprevyear.click();
    await this.getyear.click();
    await this.selectmonth.click();
    await this.selectdate.click();

    //enter email id
    await this.studentemailid.fill(email);

    // Get OTP and confirm
    await this.getotp.click();
    await this.enterotp.fill('1042'); // Static OTP for now
    await this.confirmProceed.click();

    // Log end of method
    console.log("Athlete details filled successfully.");
  }

  async step1submitbutton() {
    await this.submitbutton.click();
  }

  async step1studentdetailsagain() {
    await this.Step1studentdetails.click();
  }

}
module.exports = { DashboardPage }

