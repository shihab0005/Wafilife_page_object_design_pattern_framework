/* Scenario 1: 
Search Favourite Writer from Writer Page and view All books and selected One of Your Favourite Book and Confirm order. 


Scenario Description: 
User Navigate To the Home Page and goto Login (লগইন / রেজিস্টার) page and Login with valid username/email and password.Navigate to Writer(লেখক) page Search Writer and Selcet Writter and view 
all books of the selected writer, select a book from all books and view book details,confirm order by fillup the form of 
user details and successfully logout.

Test test.steps:
1.	Navigate to Website Home Page and Verify the url and title of home page.
2.	Click Login Button Navigate to Login Page and Verify the title, url, username field, password field, 
    login button on the login page.
3.	Login With Valid Credential.
4.	Navigate To Writer Page. Verify the writer page title and URL.
5.	Search My Favourit Writer and Find All Search Result and select My Favourite Writer.
6.	Display All Book From My Favourite Writer and Select One Of My Favourite Book.
7.	Confirm Order With Valid User Details like(select district,Thana,Address,others Info)
8.	After Successfully fill User Info navigate to My Account Page.
9.  Successfully Logout From the Website
	

*/

import {
  url,
  title,
  titleLoginPage,
  urlLoginPage,
  writterPageUrl,
  writterPageTitle,
} from "../config";
import { expect } from "@playwright/test";
import test from "../testFixture/fixture";

test.describe.serial("Order Confirm From Writter Page", () => {
  test("Successfully Placed order from Writter page", async ({
    loginPage,
    writerPage,
    bookPage,
    orderBook,
    page,
  }) => {
    await test.step("Navigate to Website Home Page", async () => {
      await loginPage.openAPP();
      expect(await loginPage.getTitle()).toBe(title);
      expect(await loginPage.getUrl()).toBe(url);
    });

    await test.step("Click Login Button goto Login Page", async () => {
      await loginPage.navigateToLoginPage();
      expect(await loginPage.getTitle()).toBe(titleLoginPage);
      expect(await loginPage.getUrl()).toBe(urlLoginPage);
    });

    await test.step("Login With Valid Credential with input fields check", async () => {
      await loginPage.verifyEmailElementIsVisible();
      await loginPage.verifyPasswordElementIsVisible();
      await loginPage.verifyLoginBtnElementIsVisible();
      await loginPage.loginWithCredential();
    });

    await test.step("Navigate To Writer Page", async () => {
      await writerPage.navigateToWriterPage();
      expect(await writerPage.getTitle()).toBe(writterPageTitle);
      expect(await writerPage.getUrl()).toBe(writterPageUrl);
    });

    await test.step("Search Your Favourit Writer ", async () => {
      await writerPage.searchWriter();
      await writerPage.findYourSearchWriter();
    });

    await test.step("Select Your Favourite Book from All books From Your Favourit Writer", async () => {
      await bookPage.selectSingleBooks();
      await bookPage.clickBookOrderBtn();
    });

    await test.step("Confirm Order With Valid User Details", async () => {
      await orderBook.clickOrderConfirmBtn();
      await orderBook.clickDistrictSelector();
      await orderBook.selectDistrictFromList();
      await orderBook.selectThanaFromList();
      await orderBook.addressFieldVale();
      await orderBook.othersFieldValue();
      await orderBook.clickCheckBox();
      await orderBook.clickCurierRadioBtn();
      await orderBook.clickRoketPaymentRadioBtn();
    });

    await test.step("After Successfully fill User Info Logout Form Site", async () => {
      await loginPage.clickMyAccountBtn();
      await loginPage.logoutFromWebsite();
    });
    await page.pause();
  });
});
