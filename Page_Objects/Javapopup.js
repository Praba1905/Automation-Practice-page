class Javapopup{

constructor(page)
{
    this.page=page;
    //this.alert_name=this.page.locator('#name');
    this.alert_name=this.page.getByPlaceholder('Enter Your Name');
    this.confirm_btn=this.page.locator('#confirmbtn')
    this.hover1=this.page.locator('#mousehover');
    this.hover1_click=this.page.locator("//div[@class='mouse-hover-content']/a[1]")

}

async alertpopup(alert)
{
    await this.alert_name.fill(alert)
    this.page.on('dialog',Dialog=>Dialog.accept())
     await this.confirm_btn.click();
     
}

async Mousehover()
{
 await this.hover1.hover();
 await this.hover1_click.click();
 //await this.page.pause();
}

}
module.exports= {Javapopup}
