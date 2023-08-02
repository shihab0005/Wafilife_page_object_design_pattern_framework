import { test as fixture } from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import WriterPage from "../Pages/WriterPage";
import BookPage from "../Pages/BookPage";
import OrderBook from "../Pages/OrderBook";
import HomePage from "../Pages/HomePage";

const test = fixture.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  writerPage: async ({ page }, use) => {
    await use(new WriterPage(page));
  },
  bookPage: async ({ page }, use) => {
    await use(new BookPage(page));
  },
  orderBook: async ({ page }, use) => {
    await use(new OrderBook(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
export default test;
