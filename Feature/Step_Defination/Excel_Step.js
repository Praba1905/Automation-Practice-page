const { Then, Given, When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const Exceljs = require("exceljs");


Given("Register to Ecommerce application with data in Excel",
  { timeout: 100 * 1000 },  async function () {
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
     
    console.log("Scenario1");
    const firstnamedata = await this.loginPage.getexceldata("Firstname","Credentials");
    const lastnamedata = await this.loginPage.getexceldata("Lastname","Credentials");
    const mailiddata = await this.loginPage.getexceldata("Email","Credentials");
    const phonedata = await this.loginPage.getexceldata("PhoneNumber","Credentials");
    const mobilenum = phonedata.toString();
    const passworddata = await this.loginPage.getexceldata("Password","Credentials");

    console.log("Data's from excel");
    console.log("Firstname:", firstnamedata);
    console.log("lastname:", lastnamedata);
    console.log("Mail data", mailiddata);
    console.log("PhoneNumber", mobilenum);
    console.log("Password", passworddata);

    //RegistrationPage
    console.log("Registering by using the data from the excel")
    await this.loginPage.registration(firstnamedata,lastnamedata,mailiddata,mobilenum,passworddata);
    
  }
);

Given("login to Ecommerce application with {string} and {string}",{ timeout: 100 * 1000 },
   async function (username, password) {

    //Entering login page using BDD data table
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin(username, password);
  }
);

Then("Add {string} to the cart", async function (productName) {
    // Adding to the cart page

  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then("Verify {string} is displayed in the cart",{ timeout: 100 * 1000 },async function (productName) {

    //Verifying the product
    console.log("productName:", productName);
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
  }
);

When("valid details and Place the order is done",{ timeout: 100 * 1000 }, async function () {

    //Order Review
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
  }
);

Then("Verify the Order in the history page", async function () {
    //OrderHistory
  await this.dashboardPage.navigateToOrders();
  const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(this.orderId);
  expect(
    this.orderId.includes(await ordersHistoryPage.getOrderId())
  ).toBeTruthy();
});


