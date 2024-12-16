Feature: Add Expansion pack into the cart

Scenario Outline: Athlete add expansion pack into the cart
  Given Navigate to the login page
  When enter mobilenumber "<MobileNumber>" and otp "<Otp>"
  Then click on submit OTP
  When click on Exapansion pack banner
  Then add Exapansion into the cart




  Examples:
    | MobileNumber    | Otp  | 
    | 3333333368      | 1042 | 
    
