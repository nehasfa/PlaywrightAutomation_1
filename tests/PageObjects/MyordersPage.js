class MyOrdersPage
{
    constructor(page)
    {
       this.page = page;
       this.Profileiconbutton = page.locator('#profile-btn').nth(1);
       this.MyOrdersbutton = page.locator('a', { hasText: 'My Orders' });
       this.Withdrawparticipation = page.locator('text="WITHDRAW PARTICIPATION"');
       this.Cancelreason = page.locator('#headlessui-listbox-button-5');
       this.Examreason = page.locator('#headlessui-listbox-option-41');
       this.Invoice =  page.locator('a', { hasText: 'Invoice' }).first();
    }
    async profileiconbutton()
{
   await this.Profileiconbutton.waitFor({ state: 'visible', timeout: 5000 });
   await this.Profileiconbutton.click();
}
async myordersbutton()
{  
   await this.MyOrdersbutton.waitFor({ state: 'visible', timeout: 5000 });
   await this.MyOrdersbutton.click();
}
async withdrawparticipation()
{
    await this.Withdrawparticipation.waitFor({ state: 'visible', timeout: 5000 });
    await this.Withdrawparticipation.click();
}
async cancelreason()
{
    await this.Cancelreason.waitFor({ state: 'visible', timeout: 5000 });
    await this.Cancelreason.click();
    
}
async examreason()
{
    await this.Examreason.waitFor({ state: 'visible', timeout: 5000 });
    await this.Examreason.click();
}
async invoice()
{
    await this.Invoice.waitFor({ state: 'visible', timeout: 5000 });
    await this.Invoice.click();
}
}
module.exports = {MyOrdersPage};