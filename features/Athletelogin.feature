Feature: Athlete login feature
    
    Scenario Outline: Athlete login profile
        Given Go to athlete login page
        When Enter mobilenumber "<MobileNumber>" and otp "<Otp>"
        Then Click on submit otp
        Then Click Add more sports and add sport event into the cart


        Examples:
            | MobileNumber    | Otp      |
            | 3333333368      | 1042     | 





