class ProfilePage {
   constructor(page) {
      this.page = page;
      this.addMoreSportsButton = page.getByRole("button", { name: 'Add more sport' });
      this.Yourorders = page.getByRole("button", { name: 'Your Orders' });


   }
   async addMoreSports() {
      await this.addMoreSportsButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.addMoreSportsButton.click();
   }
   async yourorders() {
      await this.Yourorders.waitFor({ state: 'visible', timeout: 5000 });
      await this.Yourorders.click();
   }
}
module.exports = { ProfilePage };