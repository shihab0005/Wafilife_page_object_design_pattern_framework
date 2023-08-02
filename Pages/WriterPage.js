import BasePage from "./basepage";
import fs from "fs";
import {
  writerBtn,
  writerSerachField,
  writerSearchBtn,
  allWriters,
} from "../pageObjects/WriterLocator";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class WriterPage extends BasePage {
  constructor(page) {
    super(page);
  }
  async navigateToWriterPage() {
    await this.waitAndClick(writerBtn);
    // await this.waitForPageLoad();
  }


  async searchWriter() {
    await this.waitAndFill(writerSerachField, testData.writerNameType);
    await this.waitAndClick(writerSearchBtn);
    // await this.waitForPageLoad();
    // await this.selectSingleElementFromElements(allWriters, testData.writerName);
  }

  async findYourSearchWriter(){
    await this.selectSingleElementFromElements(allWriters, testData.writerName);
  };
}

export default WriterPage;
