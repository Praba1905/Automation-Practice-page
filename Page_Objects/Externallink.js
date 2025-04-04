const { test, expect } = require("@playwright/test");
class Externallink{

   constructor(page)
   {
      this.page=page;
      this.newlink=this.page.locator("[href *='documents-request']");
     }

     async linkcheck()
     {
        await expect(this.newlink).toHaveAttribute("class", "blinkingText");
        await this.newlink.click();
        const contentred = await this.page.locator(".red").textContent();
        console.log(contentred);
        const arrayText = contentred.split("@");
  //console.log(arrayText)
        const splittext = arrayText[1].split(" ")[0];
        console.log('The mail id:',splittext);
        await this.page.goBack();
     }

}
module.exports={Externallink}
