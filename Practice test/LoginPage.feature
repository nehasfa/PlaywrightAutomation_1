Feature: LoginPage feature
    @Test2
    Scenario: Login athlete profile
        Given Login athlete profile with "9886243067" and "1042"
        When Add sports into the cart
        Then Verify sport is displayed in the cart
        When Enter valid details and place order
        Then Verify order present in My orders page