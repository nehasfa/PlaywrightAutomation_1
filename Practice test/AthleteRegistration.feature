Feature: Athlete Registration Page Feature
   @Test1
   Scenario: Regsiter as a athlete
      Given Register as a athlete for pune city
      When Enter mobile number and click on register button
      Then Fill the athlete details
      When Add sports into the cart for athlete registration
      When Add expansion pack into the cart
      Then Verify sport and exapnsion pack is displayed in the cart
      When Enter valid athlete details and place order
      Then Verify My orders page