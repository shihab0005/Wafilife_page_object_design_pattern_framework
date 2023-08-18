import { baseUrl } from "../config";
import fs from "fs";
import BasePage from "./basepage";
import {
  loginBtnNav,
  emailField,
  passwordField,
  loginBtn,
  myAccount,
  myAccountAllOptions,
  myAccountTitle,
  logoutBtn,
  profileBtn,
  errorMsgDiv,
  errorMsgTxt,
  lostYourPassword,
  cLoginBtn,
  cUsername,
  cPassword,
  cSubmit,
} from "../pageObjects/LoginLocators";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async openAPP() {
    await super.open(baseUrl);
    // await this.waitForPageLoad();
  }

  async navigateToLoginPage() {
    await this.waitFor(loginBtnNav);
    await this.waitAndClick(loginBtnNav);
  }

  async verifyEmailElementIsVisible() {
    return await this.isElementVisible(emailField, testData.notVisibleText);
  }
  async verifyPasswordElementIsVisible() {
    return await this.isElementVisible(passwordField, testData.notVisibleText);
  }
  async verifyLoginBtnElementIsVisible() {
    return await this.isElementVisible(loginBtn, testData.notVisibleText);
  }
  async verifyInvalidMessageElementIsVisible() {
    return await this.isElementVisible(errorMsgDiv, testData.notVisibleText);
  }

  async verifyMyAccountElementIsVisible() {
    return await this.isElementVisible(myAccountTitle, testData.notVisibleText);
  }
  async verifyMyAccountText() {
    return await this.verifyElementText(myAccountTitle, testData.myAccountText);
  }
  async verifyLogoutText() {
    return await this.verifyElementText(logoutBtn, testData.logoutText);
  }
  async verifyProfileText() {
    return await this.verifyElementText(profileBtn, testData.profileText);
  }
  async verifyErrorMsgText() {
    return await this.verifyElementText(errorMsgTxt, testData.errorMessageText);
  }

  async verifyNavigateToLostYourPasswordPage() {
    await this.waitAndClick(lostYourPassword);
  }

  async loginWithCredential() {
    await this.waitAndFill(emailField, testData.email);
    await this.waitAndFill(passwordField, testData.password);
    await this.waitAndClick(loginBtn);
    await this.waitForPageLoad();
  }
  async loginWithInvalidCredential() {
    await this.waitAndFill(emailField, testData.Iemail);
    await this.waitAndFill(passwordField, testData.Ipassword);
    await this.waitAndClick(loginBtn);
    // await this.waitForPageLoad();
  }
  async loginWithInvalidPasswordCredential() {
    await this.waitAndFill(emailField, testData.email);
    await this.waitAndFill(passwordField, testData.Ipassword);
    await this.waitAndClick(loginBtn);
    // await this.waitForPageLoad();
  }

  async clickMyAccountBtn() {
    // await this.scrollByMouseWheel(myAccount);
    await this.scrollByMouseWheel();
    await this.waitAndClick(myAccount);
    // await this.waitForPageLoad();
  }

  async logoutFromWebsite() {
    await this.selectSingleElementFromElements(
      myAccountAllOptions,
      testData.logoutText
    );
    // await this.waitForPageLoad();
  }
  async verifyAllOptionsFromMyAccount() {
    await this.selectAllElementFromElements(myAccountAllOptions);
  }

  ///confirm order page login

  async loginFromConfirmOrderPage() {
    await this.waitAndClick(cLoginBtn);
    await this.waitAndFill(cUsername, testData.email);
    await this.waitAndFill(cPassword, testData.password);
    await this.waitAndClick(cSubmit);
  }
}
export default LoginPage;
