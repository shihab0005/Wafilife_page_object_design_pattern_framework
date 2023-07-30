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
} from "../pageObjects/LoginLocators";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async openAPP() {
    await super.open(baseUrl);
    await this.waitForPageLoad();
  }

  async navigateToLoginPage() {
    await this.waitAndClick(loginBtnNav);
    await this.waitForPageLoad();
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

  async loginWithCredential() {
    await this.waitAndFill(emailField, testData.email);
    await this.waitAndFill(passwordField, testData.password);
    await this.waitAndClick(loginBtn);
    await this.waitForPageLoad();
  }

  async clickMyAccountBtn() {
    await this.waitAndClick(myAccount);
    await this.waitForPageLoad();
  }

  async logoutFromWebsite() {
    await this.selectSingleElementFromElements(
      myAccountAllOptions,
      testData.logoutText
    );
    await this.waitForPageLoad();
  }
}
export default LoginPage;
