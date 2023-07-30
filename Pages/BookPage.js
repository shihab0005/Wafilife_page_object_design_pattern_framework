import BasePage from "./basepage";
import fs from "fs";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));
import { allBooksName, orderBookBtn } from "../pageObjects/BookLocator";

class BookPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async selectSingleBooks() {
    await this.selectSingleElementFromElements(allBooksName, testData.bookName);
  }
  async clickBookOrderBtn() {
    await this.waitAndClick(orderBookBtn);
  }
}
export default BookPage;
