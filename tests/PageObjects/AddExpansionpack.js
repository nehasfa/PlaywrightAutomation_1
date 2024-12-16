class AddExpansionpack {
    constructor(page) {
        this.page = page;
        this.Step3Exapnsionpack = page.getByRole("button", { name: 'Step 3: Select Expansion Pack' });
        this.Expansionpackbanner = page.getByRole('img', { name: 'Package Banner' });
        this.Bronzepackage = page.getByRole("button", { name: 'Add to Cart' }).nth(1);
        this.Expansionpackpopup = page.getByRole("button", { name: 'OK' });
    }

    // Step 3: Add Expansion Pack
    async step3Expansionpack() {
        await this.Step3Exapnsionpack.waitFor({ state: 'visible',timeout: 5000 });
        await this.Step3Exapnsionpack.click();
    }
    async expansionpackbanner() {
        await this.Expansionpackbanner.waitFor({ state: 'visible',timeout: 5000});
        await this.Expansionpackbanner.click();
    }
    async bronzepackage() {
        await this.Bronzepackage.waitFor({ state: 'visible',timeout: 5000 });
        await this.Bronzepackage.click();
        await this.Expansionpackpopup.waitFor({ state: 'visible',timeout: 5000});
        await this.Expansionpackpopup.click();
    }

}
module.exports = { AddExpansionpack }
