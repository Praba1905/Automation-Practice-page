
class HidingFunction{

     constructor(page)
     {
       this.page=page;
       this.textbox=this.page.locator("#displayed-text");
       this.hidebox=this.page.locator("#hide-textbox");
     }

     async visiblefunction(){

        const bool=await this.textbox.isVisible();
        console.log("Is textbox is visible: ", bool);
     }

     async hidefunction(){

        await this.hidebox.click();
        console.log("Is textbox visible after clicking hide:",
            await this.page.locator("#displayed-text").isVisible());
     }


}
module.exports={HidingFunction}
