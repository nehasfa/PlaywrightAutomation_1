Feature: Verify Review & Checkout complete payment

Scenario Outline: Complete payment for sport and expansion pack
  Given go to login page
  When type mobilenumber "<MobileNumber>" and otp "<Otp>"
  Then press submit OTP
  When go to Add more sports
  Then Click on review&Checkout
  Then Complete payment method
  




  Examples:
    | MobileNumber    | Otp  | 
    | 3333333368      | 1042 | 
    
