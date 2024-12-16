const { PassThrough } = require("stream");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.MobileInput = page.locator('form').filter({ hasText: 'Enter your registered mobile' }).getByPlaceholder("9900 0000 00");
        this.GetOTP = page.getByRole("button", { name: 'Get OTP' });
        this.EnterOTP = page.locator("[name='otp']");
        this.SubmitOTP = page.getByRole("button", { name: 'Submit OTP' });
        this.schoolradiobutton = page.locator('input[type="radio"]').nth(1); //select school radio button
        this.athleteradiobutton = page.locator('input[type="radio"]').nth(0); // select athlete radio button
        this.registerforpune = page.locator('.mb-1').first(); // select pune city
        this.Registermobileinput = page.locator('form').filter({ hasText: 'Enter your mobile number' }).getByPlaceholder("9900 0000 00");// enter mobile number to register
        this.Registerbutton = page.getByRole("button", { name: 'Register' });// click on Register button
    }

    async goto() {
        await this.page.goto("https://stage.sfaplay.com/championship/login");
    }

    async validLogin(MobileNumber, Otp) {
        
        await this.MobileInput.fill(' ');  // Clear any existing value
        await this.MobileInput.waitFor({ state: 'visible', timeout: 10000 });


        await this.MobileInput.type(MobileNumber.toString());
        await this.GetOTP.click();
        await this.EnterOTP.type(Otp.toString());
    }
    async submitotp() {

        await this.SubmitOTP.click();

    }
    async asradiobutton() {
        await this.schoolradiobutton.check();
        await this.athleteradiobutton.check();
    }
    async registeredcity() {
        await this.registerforpune.click();
    }
    async registermobileinput() {
        await this.Registermobileinput.fill('3333333378');
    }
    async registerbutton() {
        await this.Registerbutton.click();
    }
}

module.exports = { LoginPage };
