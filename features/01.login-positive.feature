@digital-skola @login 
Feature: Swag Labs - Login - Positive

@positive
  Scenario: As a standart_user, I want to log in successfully
  Given YudhisThiro is on the login page
   When YudhisThiro login with "standart_user" credential
   Then YudhisThiro should see home page

