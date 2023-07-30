/* Scenario 1: Verify user Login with all required field and valid, invalid credentials and messages. 


Scenario Description: 
User Navigate To the Home Page and goto Login (লগইন / রেজিস্টার) page and Login with valid username/email
and password and also Login With invalid Credentials and verify all error message. 


Test test.steps:
1.	Navigate to Website Home Page .
2.	Click Login Button Navigate to Login Page.
3.	Login with valid Credential and Check All fields.
4.	Login With invalid Credentials and verify all the error message.
5.	Login With valid Email invalid password and verify All error message with Navigate to lost password page.
6.	Login With valid Credintial and Click all option of My account.
*/

import test from "../testFixture/fixture";

test.describe("Verify User Login page", async () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openAPP();
    await loginPage.navigateToLoginPage();
  });

  test("Login with valid Credential", async ({ loginPage }) => {
    await loginPage.verifyEmailElementIsVisible();
    await loginPage.verifyPasswordElementIsVisible();
    await loginPage.verifyLoginBtnElementIsVisible();
    await loginPage.loginWithCredential();
    await loginPage.verifyMyAccountElementIsVisible();
    await loginPage.verifyMyAccountText();
    await loginPage.verifyLogoutText();
    await loginPage.verifyProfileText();
  });

  test("Login With invalid Credentials", async ({ loginPage }) => {
    await loginPage.verifyEmailElementIsVisible();
    await loginPage.verifyPasswordElementIsVisible();
    await loginPage.verifyLoginBtnElementIsVisible();
    await loginPage.loginWithInvalidCredential();
    await loginPage.verifyInvalidMessageElementIsVisible();
    await loginPage.verifyErrorMsgText();
  });

  test("Login With valid Email invalid password", async ({ loginPage }) => {
    await loginPage.verifyEmailElementIsVisible();
    await loginPage.verifyPasswordElementIsVisible();
    await loginPage.verifyLoginBtnElementIsVisible();
    await loginPage.loginWithInvalidPasswordCredential();
    await loginPage.verifyInvalidMessageElementIsVisible();
    await loginPage.verifyNavigateToLostYourPasswordPage();
  });

  test("Login With valid Credintial and Click all option of My account", async ({
    loginPage,
  }) => {
    await loginPage.loginWithCredential();
    await loginPage.verifyAllOptionsFromMyAccount();
  });
});
