 import BasePage from "./basepage";
import fs from "fs";
import {
  search_div,
  logo,
  loginLinks,
  searchField,
  searchFieldBtn,
} from "../pageObjects/HomeLocator";
import { allBooksName } from "../pageObjects/BookLocator";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));
class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async checkElementIsVisible() {
    await this.isElementVisible(search_div, testData.notEnabledText);
    await this.isElementVisible(logo, testData.notEnabledText);
    await this.isElementVisible(loginLinks, testData.notEnabledText);
  }
  async searchBook() {
    await this.waitAndFill(searchField, testData.searchBookNameText);
    await this.waitAndClick(searchFieldBtn);
  }

  async selectYourFavouriteBook() {
    await this.selectSingleElementFromElements(
      allBooksName,
      testData.searchBookName
    );
  }
}
export default HomePage;
