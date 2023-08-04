 import BasePage from "./basepage";
import {
  confirmOrder,
  districtSelector,
  allDistrict,
  thanaSelector,
  addressTextField,
  othersInfoTextField,
  checkBoxField,
  curierRadioBtn,
  roketPatmentRadioBtn,
} from "../pageObjects/OrderBookLocatior";
import fs from "fs";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class OrderBook extends BasePage {
  constructor(page) {
    super(page);
  }

  async clickOrderConfirmBtn() {
    await this.waitFor(confirmOrder);
    await this.waitAndClick(confirmOrder);
  }

  async clickDistrictSelector() {
    await this.waitAndClick(districtSelector);
  }

  async selectDistrictFromList() {
    await this.selectSingleElementFromElements(
      allDistrict,
      testData.districtName
    );
  }

  async selectThanaFromList() {
    await this.handleDropdown(thanaSelector, testData.thanaName);
  }

  async addressFieldVale() {
    await this.waitAndFill(addressTextField, testData.address);
  }
  async othersFieldValue() {
    await this.waitAndFill(othersInfoTextField, testData.OthersText);
  }
  async clickCheckBox() {
    await this.waitAndClick(checkBoxField);
  }
  async clickCurierRadioBtn() {
    await this.waitAndClick(curierRadioBtn);
  }
  async clickRoketPaymentRadioBtn() {
    await this.waitAndClick(roketPatmentRadioBtn);
  }
}
export default OrderBook;
