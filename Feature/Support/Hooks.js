
const playwright=require('@playwright/test')
const {POManager}=require('../../Pageobject/POManagerR')
const{Before,After} = require('@cucumber/cucumber')


Before(async function () {
    const browser=await playwright.chromium.launch({headless: false});
    const context =await browser.newContext(); 
    this.page=await context.newPage();
    this.poManager = new POManager(this.page);
      });
      
//       BeforeStep(async function(){
//         //console.log("Beforestep Hooks")
//       });

//   AfterStep(async function({result}){
    
//     if(result.status === Status.FAILED)
//     {
//         await this.page.screenshot({path: 'screenshot1.png'})

//     }
   
//   }
// )

  After(async function () {
    await console.log('Final execution')
  });
