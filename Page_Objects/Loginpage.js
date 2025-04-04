const { test, expect } = require("@playwright/test");
class PractisePage {
  constructor(page) {
    this.page = page;
    this.radio_button = this.page.locator(".radioButton").nth(2);
    this.country =this.page.locator("//input[@id='autocomplete']");
    this.country_dropdown = this.page.locator(".ui-menu-item-wrapper");
    this.options=this.page.locator("#dropdown-class-example")
    this.checkboxeg=this.page.locator("#checkBoxOption3")
  }

  async URL() {
    await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle("Practice Page");
  }

  async radiobutton_dropdown(option) {
    await this.radio_button.click();
    await this.options.selectOption(option);
    await this.checkboxeg.check();

  }
  async selectcountry(countrycode) {
    await this.country.pressSequentially(countrycode, { delay: 100 });
    await this.country_dropdown.locator("text='Australia'").click();
    //console.log('Course selection')
  }
}
module.exports = { PractisePage };
