//const { test, expect } = require("@playwright/test");

class Newtab_Newwindow{

      constructor(page,context)
      {
         this.page=page;
         this.context=context;
        this.doclink = this.page.locator(".btn-style.class1.class2");
        this.windlink = this.page.locator("#openwindow");
        this.logo=this.page.locator('.logo');
      }

   async newtab()
   {
      const [tablink]=await Promise.all([
        this.context.waitForEvent('page'),
        this.doclink.click(),            
     ])
     await tablink.waitForLoadState("networkidle");
     const tabtext = await tablink .locator("//a[text()='Access all our Courses']").textContent();
     console.log(tabtext);
   }   
     async newwindow(){
       const [newlink]=await Promise.all([
        
         this.context.waitForEvent('page'),
         this.windlink.click(),
       ])
       //await windowlink.waitForLoadState("networkidle");
       console.log(await newlink.title());
       
       

     }

}
module.exports={Newtab_Newwindow};

