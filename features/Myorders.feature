Feature: Verify Review & Checkout complete payment

Scenario Outline: Complete payment for sport and expansion pack
  Given athlete on login page
  When login with mobilenumber "<MobileNumber>" and otp "<Otp>"
  Then submit OTP
  Then click on your orders
  
  




  Examples:
    | MobileNumber    | Otp  | 
    | 3333333368      | 1042 | 
    
