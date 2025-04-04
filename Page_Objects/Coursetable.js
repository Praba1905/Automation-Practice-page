
class Coursetable{

      constructor(page)
      {
         this.page=page;
         this.course_locator =this.page.locator("//table[@class='table-display']/tbody/tr/td[2]");        
         this.price=this.page.locator("//table[@class='table-display']/tbody/tr/td[3]")
        
      }
   
   async courseSelection(course_details)
      {
    const count =await this.course_locator.count();
    console.log("count", count);

    for (let i = 0; i < count; ++i) {

        // console.log('Entering courseloop')
      const course_content = await this.course_locator.nth(i).textContent();

      if (course_content.includes(course_details)) {
        console.log("The course details below");
        const price = await this.price.nth(i).textContent();
        console.log(course_content, "= ", price);
      }
  }

   }   

   async scroll()
   {
      await this.page.locator("//div[@class='tableFixHead']/table/tbody/tr/td[2]").first().hover();
      await this.page.mouse.wheel(0,1000);
      const header_count=await this.page.locator("//div[@class='tableFixHead']/table/tbody/tr").count();
      console.log('Total number of rows in Header Table:',header_count)
   }

}
module.exports={ Coursetable };
