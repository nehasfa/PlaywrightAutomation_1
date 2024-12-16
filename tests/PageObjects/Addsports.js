class Addsports {
    constructor(page) {
        this.page = page;

        this.Step2selectsportevent = page.getByRole("button", { name: 'Step 2: Select Sport Event' });
        this.sportsDropdown = page.getByRole('button', { name: 'Athletics' });
        this.selectshooting = page.getByText('Shooting', { exact: true });
        this.ageGroupDropdown = page.getByRole("button", { name: 'all', exact: true });
        this.sportEvent = page.getByText('All Events').nth(0);
        this.addEvent = page.locator('.h-20').first();
    }

    async step2selectsportevent() {
        await this.Step2selectsportevent.waitFor({ state: 'visible', timeout: 5000 });
        await this.Step2selectsportevent.click();
        await this.sportsDropdown.waitFor({ state: 'visible' , timeout: 5000 });
        await this.sportsDropdown.click();
    }

    // Select Athletics Sport
    async selectSportAthletics() {
        await this.sportsDropdown.click();
        await this.ageGroupDropdown.waitFor({ state: 'visible', timeout: 5000 })
        await this.ageGroupDropdown.click();
        await this.sportEvent.waitFor({ state: 'visible', timeout: 5000 });
        await this.sportEvent.click();
        await this.addEvent.waitFor({ state: 'visible', timeout: 5000 });
        await this.addEvent.click();
    }
    // Select Shooting Sport
    async selectsportshooting() {
        await this.sportsDropdown.waitFor({ state: 'visible', timeout: 5000 });
        await this.sportsDropdown.click();
        await this.selectshooting.waitFor({ state: 'visible', timeout: 5000 });
        await this.selectshooting.click();
        await this.addEvent.waitFor({ state: 'visible', timeout: 5000 });
        await this.addEvent.click();
    }

}
module.exports = {Addsports}