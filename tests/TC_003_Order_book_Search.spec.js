/* Scenario 1: Search Book from home page order book from order details page also login from that page. 


Scenario Description:search any book category from search field and select your favorite book and confirm order 
also login with credintial from confirm order page and fillup all user information and successfully logout



Test steps:
1.	Navigate to website home page .
2.	Verify visibility of logo, Search field and login links.
3.	Search Book from search field.
4.	Select Your Favourite Book.
5.	Press order book button.
6.	Press Confirm Order button.
7.	Login before Confirm Order.
8.	Confirm Order by giving user details.
9.	Logout from the website.
*/

import { expect } from "@playwright/test";
import test from "../testFixture/fixture";

test.describe
  .serial("Order Book from Search Option and Confirm order from order Details page also login in that page", async () => {
  test("Order Book From Home Page with search", async ({
    loginPage,
    bookPage,
    orderBook,
    homePage,
    page,
  }) => {
    await test.step("Navigate to website", async () => {
      await loginPage.openAPP();
    });

    await test.step("Verify visibility of logo, Search field and login links", async () => {
      await homePage.checkElementIsVisible();
    });

    await test.step("Search Book from search field", async () => {
      await homePage.searchBook();
    });

    await test.step("Select Your Favourite Book", async () => {
      await homePage.selectYourFavouriteBook();
    });

    await test.step("Press order book button", async () => {
      await bookPage.clickBookOrderBtn();
    });

    await test.step("Press Confirm Order button", async () => {
      await orderBook.clickOrderConfirmBtn();
    });

    await test.step("Login before Confirm Order", async () => {
      await loginPage.loginFromConfirmOrderPage();
    });

    await test.step("Confirm Order by giving user details", async () => {
      await orderBook.clickDistrictSelector();
      await orderBook.selectDistrictFromList();
      await orderBook.selectThanaFromList();
      await orderBook.addressFieldVale();
      await orderBook.othersFieldValue();
      await orderBook.clickCheckBox();
      await orderBook.clickCurierRadioBtn();
      await orderBook.clickRoketPaymentRadioBtn();
    });

    await test.step("Logout from the website", async () => {
      await loginPage.clickMyAccountBtn();
      await loginPage.logoutFromWebsite();
    });

    await page.push();
  });
});
