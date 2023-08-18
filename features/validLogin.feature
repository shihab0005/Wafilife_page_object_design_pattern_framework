Feature: Verify Login With Valid And Invalid Credentials

  Background: 
     Given Navigate to the website 
     And Navigate to the login page
   Scenario: Verify Login With Valid Credentials And Check Few Assertions
      When Navigate to the website
      When Go to the Login Page
      Given Login with email 'shihab157394@gmail.com' and password 'HWjn@baRn7id5hB'
      Then Verify the Few Assertion to Successfully Login User