const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('@Login page test', async ({ page }) => {
  // Increase test timeout (if required)
  test.setTimeout(120000); // 60 seconds

  // Navigate to the SFA login URL
  await page.goto("https://stage.sfaplay.com/championship/login");

  // More specific locator to target the correct input field (filter by form text)
  const mobileInput = page.locator('form').filter({ hasText: 'Enter your registered mobile' }).getByPlaceholder("9900 0000 00");
  
  // Fill the mobile number
  await mobileInput.fill("8888888451");

  // Wait for network idle state after submission
  await page.waitForLoadState('networkidle');

  // Click the "Get OTP" button
  await page.getByRole("button", { name: 'Get OTP' }).click();

  // Enter OTP 
  const otpInput = page.locator("[name='otp']");
  await expect(otpInput).toBeVisible({ timeout: 30000 }); // Increased timeout to 30 seconds
  await otpInput.fill('1042');

  // Click on submit OTP button
  const submitOtpButton = page.getByRole("button", { name: 'Submit OTP' });
  await expect(submitOtpButton).toBeVisible({ timeout: 30000 }); // Ensure the button is visible
  await submitOtpButton.click();

  // Pause to debug further interactions if needed
  // await page.pause();

  // Click on add more sport button
  const addMoreSportButton = page.getByRole("button", { name: 'Add more sport' });
  await expect(addMoreSportButton).toBeVisible({ timeout: 30000 });
  await addMoreSportButton.click();

  // Click on select sport dropdown
  await page.getByRole('button', { name: 'Athletics' }).click();
  await page.getByText('Athletics').first().click();

 

  // Click on age group dropdown
await page.getByRole("button", { name: 'all', exact: true }).click();


await page.getByRole('option', { name: 'all' }).first().click(); // Use .first() to select the first occurrence

// Click on events dropdown
  // Click on the first occurrence of 'All Events'
  await page.getByText('All Events').nth(0).click(); // Adjust the index if necessary


  // Add first event into the cart 
   await page.locator('.h-20').first().click();

  // Go to the review & checkout
  await page.getByRole("button", { name: 'Step 4: Review & checkout' }).click();
  await page.getByRole("button", { name: 'Step 4: Review & checkout' }).click();

  // Click on show details
  await page.getByRole("button", { name: 'Show Details' }).click();


 // Click on mandatory checkbox (Terms & Conditions)
 await page.locator('input[type="checkbox"]').nth(1).check();

// Click on continue to payment button
const continueToPaymentButton = page.getByRole("button", { name: 'Continue To Payment' });
await expect(continueToPaymentButton).toBeVisible();
await continueToPaymentButton.click();


const iframes = await page.locator('iframe').elementHandles();
for (const iframe of iframes) {
  const frame = await iframe.contentFrame();
  if (frame) {
    const netbankingOption = frame.locator('label').filter({ hasText: 'ICICI Bank Netbanking' });
    if (await netbankingOption.count() > 0) {
      await netbankingOption.scrollIntoViewIfNeeded();
      await netbankingOption.click({ force: true });
      break;
    }
  }
}

// Locate and fill in mobile number in payment iframe
const paymentIframe = page.frameLocator('.razorpay-checkout-frame'); // Update selector as needed
const paymentInput = paymentIframe.getByPlaceholder('Mobile number');
await expect(paymentInput).toBeVisible({ timeout: 30000 });

// Introduce a small wait to ensure stability before filling

await paymentInput.fill('8888888451');
await page.waitForTimeout(2000); // 2-second delay; adjust if necessary
const continueButton = paymentIframe.getByRole("button", { name: 'Continue' });
await continueButton.scrollIntoViewIfNeeded();
await expect(continueButton).toBeVisible({ timeout: 10000 });

//Adding a forced click if needed
await continueButton.click({ force: true });
await page.waitForTimeout(2000);

const paymentIframetwo = page.frameLocator('.razorpay-checkout-frame'); // Update with correct selector if needed

// Locate the "ICICI Bank Netbanking" option within the iframe
const netbankingOption = paymentIframetwo.locator('[data-value="netbanking"]').first(); // Change to nth(1) or nth(2) if needed
await expect(netbankingOption).toBeVisible({ timeout: 30000 });
await netbankingOption.click();
await page.waitForTimeout(2000);

const axisBankOption = paymentIframe.locator('text="Axis Bank"').first();
await expect(axisBankOption).toBeVisible({ timeout: 30000 });
await axisBankOption.click();
await page.waitForTimeout(2000);

const payementSuccess = page.getByRole("button", { name: "Success" });
await expect(payementSuccess).toBeVisible({ timeout: 20000 });
await payementSuccess.click();
await page.waitForTimeout(2000);

const okbutton = page.getByRole("button",{name: "Ok"});
await expect(okbutton).toBeVisible({timeout: 20000});
await okbutton.click();
await page.waitForTimeout(2000);

//click on profile icon button
const profileButton = page.locator('#profile-btn').nth(1);
await profileButton.waitFor({ state: 'visible', timeout: 30000 });
await profileButton.click();
await page.waitForTimeout(2000);

//Go to My Orders
const myOrdersOption = page.locator('a', { hasText: 'My Orders' });
await expect(myOrdersOption).toBeVisible({ timeout: 30000 });
await myOrdersOption.click();
await page.waitForTimeout(2000);

//click on withdraw participation button
const WithdrawParticipation = page.locator('text="WITHDRAW PARTICIPATION"').first();
await expect(WithdrawParticipation).toBeVisible({timeout: 20000});
await WithdrawParticipation.click();
await page.waitForTimeout(2000);

//click on cancellation reason drodown
const cancelreason = page.locator('#headlessui-listbox-button-5');
await expect(cancelreason).toBeVisible({timeout: 2000});
await cancelreason.click();
await page.waitForTimeout(2000);

const examReason = page.locator('#headlessui-listbox-option-41');
await expect(examReason).toBeVisible({timeout: 2000});
await examReason.click();
await page.waitForTimeout(2000);



//download invoice
const invoice = page.locator('a', { hasText: 'Invoice' }).first();
await expect(invoice).toBeVisible({ timeout: 30000 });
await invoice.click();
await page.waitForTimeout(2000);


}); 
