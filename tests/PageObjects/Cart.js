class Cart {
    constructor(page) {
        this.page = page;

        this.ReviewCheckout = page.getByRole("button", { name: 'Step 4: Review & checkout' });
        this.ShowDetailsfirst = page.getByRole("button", { name: 'Show Details' }).first();
        this.ShowDetailslast = page.getByRole("button", { name: 'Show Details' }).last();
        this.MandatoryCheckbox = page.locator('input[type="checkbox"]').nth(1);
        this.ContinuePayment = page.getByRole("button", { name: 'Continue To Payment' });
    }

    // Step 4: Review Checkout
    async reviewcheckout() {
        await this.ReviewCheckout.waitFor({ state: 'visible', timeout: 5000 });
         await this.ReviewCheckout.click();
    }

    // Show Details
    async showdetailsfirst() {
        await this.ShowDetailsfirst.waitFor({ state: 'visible', timeout: 5000 });
        await this.ShowDetailsfirst.click();
    }

    async showdetailslast() {
        await this.ShowDetailslast.waitFor({ state: 'visible', timeout: 5000 });
        await this.ShowDetailslast.click();
    }

    // Agree to Terms and Conditions
    async mandatorycheckbox() {
        await this.MandatoryCheckbox.waitFor({ state: 'visible', timeout: 5000 });
        await this.MandatoryCheckbox.check();
    }

    // Proceed to Payment
    async continuepayment() {
        await this.ContinuePayment.waitFor({ state: 'visible', timeout: 5000 });
        await this.ContinuePayment.click();
    }

}
module.exports = {Cart}