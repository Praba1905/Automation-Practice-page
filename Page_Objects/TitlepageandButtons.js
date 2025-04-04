const { test, expect } = require("@playwright/test");
class TitlepageandButtons{

    constructor(page)
    {
        this.page=page;
        this.home_button=this.page.locator("//button[text()='Home']");
        this.practise_btn=this.page.locator("//button[text()='Practice']");
        this.header_title=this.page.locator('//h1');
        this.title_radio=this.page.locator("//legend[text()='Radio Button Example']")
        this.title_suggest=this.page.locator("//legend[text()='Suggession Class Example']")

         }

       async Maintitlecheck()
       {
         const titlepage=await this.header_title.textContent();
         console.log('Title Page:',titlepage)
           expect(titlepage).toEqual('Practice Page')
        // const titlepage=await this.page.locator('//h1').textContent();
        // console.log('Title Page:',titlepage);
        // expect(titlepage).toHaveText('Practice Page');
       }  

       async titltcheck()
       {
        expect(this.title_radio).toHaveText('Radio Button Example');
        const suggest_txt=await this.title_suggest.isVisible();
        console.log('Suggession Class Example is visible:',suggest_txt);

       }

      async buttoncheck()
      {
        const btn_chk=await this.home_button.isEnabled();
        console.log('Button is enable:',btn_chk);
        expect(await this.page.locator("//button[text()='Practice']")).toBeEnabled();
      }   
    
}
module.exports= {TitlepageandButtons}
