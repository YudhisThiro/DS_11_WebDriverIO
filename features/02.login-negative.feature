@digital-skola @login 
Feature: Swag Labs - Login - Negative
 


@negative
   Scenario: As a locked_out_user, I want to log in successfully
   Given YudhisThiro is on the login page
   When YudhisThiro login with "locked_out_user" credential
   Then YudhisThiro should see error "Epic sadface: Sorry, this user has been locked out"