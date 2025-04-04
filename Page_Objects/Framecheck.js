
class Framecheck
{
    constructor(page)
    {
     this.page=page;
     this.framework=this.page.frameLocator('#courses-iframe');
    }

    async framescontent()
    {
        
        // await this.framework.locator("li a[href='lifetime-access']:visible").click();
        // const frametxt=await this.framework.locator(".text h2").textContent();
        // console.log('Frametxt:',frametxt)

        await this.framework.locator("li a[href='learning-path']:visible").click();
        await this.framework.locator("[data-id='javascript']").click();
        const learnpath_count=await this.framework.locator(".card-content [data-id='lp2']").count()
        console.log('Coursecount',learnpath_count)
        //for(let i=0;i<learnpath_count;++i)
        console.log("javascript Course:1",
            await this.framework.locator(".card-content [data-id='lp2']").first().textContent())

    }

}
module.exports={Framecheck};
