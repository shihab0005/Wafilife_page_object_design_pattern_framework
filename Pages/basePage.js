import { expect } from "@playwright/test";

class BasePage {
  constructor(page) {
    this.page = page;
  }
  async open(url) {
    await this.page.goto(url);
  }
  async getUrl() {
    return await this.page.url();
  }

  async getTitle() {
    return await this.page.title();
  }
  async wait() {
    return this.page.waitForTimeout(10000);
  }
  async waitFor(selector) {
    await this.page.locator(selector).waitFor();
  }
  async waitForPageLoad() {
    return await this.page.waitForLoadState("networkidle");
  }

  async waitAndClick(selector) {
    return await this.page.click(selector);
  }
  async waitAndHardClick(selector) {
		return await this.page.$eval(selector, element => element.click())
	}
  async waitAndFill(selector, text) {
    await this.page.fill(selector, text);
  }

  async getValueFromInputField(selector) {
    return await this.page.locator(selector).inputValue();
  }

  async isElementVisible(selector, errorMessage) {
    await this.page.locator(selector).waitFor();
    const element = this.page.locator(selector);
    try {
      const isVisible = await element.isVisible();
      expect(isVisible).toBeTruthy();
    } catch (error) {
      throw new Error(`${errorMessage}`);
    }
  }

  async verifyElementText(selector, ele_text) {
    await this.page.locator(selector).waitFor();
    const element = this.page.locator(selector);
    await expect(element).toHaveText(ele_text);
  }

  async selectSingleElementFromElements(selector, value) {
    const options = this.page.locator(selector);
    const total = await options.count();
    console.log("total Options: " + total);
    console.log(value);
    for (let i = 0; i < total; i++) {
      const text = await options.nth(i).textContent();
      if (text.trim() === value.trim()) {
        await options.nth(i).click();
        break;
      }
    }
  }
  async selectAllElementFromElements(selector) {
    const options = this.page.locator(selector);
    const total = await options.count();
    console.log("total Options: " + total);
    for (let i = 1; i < total - 1; i++) {
      await options.nth(i).click();
    }
  }

  async handleDropdown(selector, s_value) {
    await this.page.locator(selector).selectOption({ value: s_value });
  }
}
export default BasePage;
