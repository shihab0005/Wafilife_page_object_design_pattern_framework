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
  }

  async navigateToLoginPage() {
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

  async loginWithCredential() {
    await this.waitAndFill(emailField, testData.email);
    await this.waitAndFill(passwordField, testData.password);
    await this.waitAndClick(loginBtn);
  }

  async clickMyAccountBtn() {
    await this.waitAndClick(myAccount);
  }

  async logoutFromWebsite() {
    await this.selectSingleElementFromElements(
      myAccountAllOptions,
      testData.logoutText
    );
  }
}
export default LoginPage;
