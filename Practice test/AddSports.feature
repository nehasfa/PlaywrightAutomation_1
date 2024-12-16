Feature: Add sport event into the cart

Scenario Outline: Athlete selects a sport event
  Given Go to login page
  When Fill mobilenumber "<Mobilenumber>" and otp "<Otp>"
  Then Click on submit OTP
  Then Click Add more sports and add sport event into the cart



  Examples:
    | Mobilenumber    | Otp  | 
    | 9886243067      | 1042 | 
    
