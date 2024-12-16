class PaymentOptions {
    constructor(page) {
        this.page = page;
        this.paymentAxisbank = page.locator('.razorpay-checkout-frame').contentFrame().getByTestId('screen-container').locator('label div').filter({ hasText: 'Axis Bank Netbanking' }).nth(1); // Correct iframe selector
        this.Mobilenumber = page.locator('.razorpay-checkout-frame').contentFrame().getByPlaceholder('Mobile number');
        this.entermobilenumber = page.locator('.razorpay-checkout-frame').contentFrame().getByPlaceholder('Mobile number');
        this.continuebutton= page.locator('.razorpay-checkout-frame').contentFrame().getByRole('button', { name: 'Continue' });
        this.netbankingmethod =  page.locator('.razorpay-checkout-frame').contentFrame().getByText('Netbanking', { exact: true });
        this.Paymentaxisbank = page.locator('.razorpay-checkout-frame').contentFrame().getByRole('button', { name: 'Axis Bank Axis Bank' }).first();
        this.paymentSuccess = this.page.getByRole("button", { name: "Success" });
        this.okButton = this.page.getByRole("button", { name: "Ok" });
    }

    async netBankingPayment() {
        
        await this.Mobilenumber.click();
        await this.entermobilenumber.fill('5567876567');
        await this.continuebutton.click();
        await this.netbankingmethod.click();
        await this.Paymentaxisbank.click();
        await this.paymentSuccess.click();
        await this.okButton.click();
    }
    async axisbank(){
        await this.paymentAxisbank.click();
        await this.paymentSuccess.click();
        await this.okButton.click();
    }
}

module.exports = { PaymentOptions };
