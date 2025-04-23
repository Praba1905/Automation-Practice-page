const Exceljs=require('exceljs')
const { expect } = require("@playwright/test");
let coldata,colnum;
class LoginPageR {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Login']");
    this.userName =this.page.locator("#userEmail");
    this.password = this.page.locator("#userPassword");
    this.regsuccess=this.page.locator('.headcolor');

}

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
    console.log('Page Title:',await this.page.title());
}

async registration(firstnamedata,lastnamedata,mailiddata,phonedata,passworddata)
{
  await this.page.locator("[tabindex='0']").click();
await this.page.locator("[type='firstname']").fill(firstnamedata);
await this.page.locator("[type='lastname']").fill(lastnamedata);
await this.page.locator("[type='email']").fill(mailiddata);
await this.page.locator("#userMobile").fill(phonedata);
await this.page.locator("[formcontrolname='occupation']").selectOption('Engineer');
await this.page.locator("[value='Male']").click();
await this.page.locator("#userPassword").fill(passworddata);
await this.page.locator("#confirmPassword").fill(passworddata);
await this.page.locator("[type='checkbox']").click();
await this.page.locator("#login").click();
//expect(await this.regsuccess).toBeVisible();
await this.page.locator('[routerlink="/auth"]').click();
await  this.userName.fill(mailiddata);
await this.password.fill(passworddata);
await this.signInbutton.click();


}

async validLogin(username,password)
{
     await  this.userName.fill(username);
     await this.password.fill(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');

}

/*async getexceldata(columnname,Credentials)*/  
async getexceldata(Credentials,columnname)
{
    
    const workbook=new Exceljs.Workbook();
  await workbook.xlsx.readFile('C:/Users/2352634/OneDrive - Cognizant/Documents/Automation/Anketo.xlsx')
  
  const worksheet=workbook.getWorksheet('Sheet2')
    let getrow=worksheet.rowCount
    console.log("getrow:",getrow)
    console.log("column count:",worksheet.columnCount);
  for(let i=1;i<=worksheet.columnCount;i++)
  {
   // console.log('Entering for i loop')
   /*if(worksheet.getRow(1).getCell(i).value == Credentials)*/
   if(worksheet.getRow(1).getCell(i).value == columnname)
   {
      colnum = i;
      console.log("col:",colnum)
      break;
   }
  }
  for(let j=1;j<=getrow;j++)
    {       
      if(worksheet.getRow(j).getCell(1).value == Credentials)
     {
       //console.log("Entering  if")
        coldata = worksheet.getRow(j).getCell(colnum).value;
        console.log('coldata:',coldata)
        break;
     }
     
    }
   // console.log("out of 2 loops")
    return coldata;
}

async excelfunc()
  {
      let output1={
        row1:-1,
        col1:-1,
        totalrow:-1,
        Firstname:"Firstname",
        lastname :"Lastname",
        Email:"Email",
        Password:"Password",
        Phonenumber:"PhoneNumber"


    }
      let j=1
      console.log(output1.row1);
  const workbook=new Exceljs.Workbook();
  await workbook.xlsx.readFile('C:/Users/2352634/OneDrive - Cognizant/Documents/Automation/Anketo.xlsx')
  
  const worksheet=workbook.getWorksheet('Sheet2')
  
   
  worksheet.eachRow( (row,rownumber)=>
  {      output1.totalrow=j++;
      row.eachCell( (cell,column)=>
      {
         
        //  if(cell.value === "Firstname")
        //  {           
        //   //console.log("r")
        //     output1.row1= rownumber;
        //     output1.col1=column;
            
        //     //console.log(output1.col1)  
        //  }
         if(cell.value === "Email")
         {
            output1.row1= rownumber;
            output1.col1=column;
            console.log("row:",rownumber);
            console.log("col:",output1.col1+1);
            //let newcol=output1.col1+1;
            const Email = worksheet.getCell(output1.row1,output1.col1+1)
            output1.Email=Email.value;
            //console.log("1:",Firstname.value);
            
        }
      } )
  
  })
         //const Firstname = worksheet.getCell(output1.row1,output1.col1)
         //output1.Firstname=Firstname.value;
  console.log('Email:',output1.Email);
  const cell1=worksheet.getCell(output1.row1,output1.col1);
  console.log(output1.row1,output1.col1);
  console.log('Total row=',output1.totalrow);
  console.log(cell1.value);
  
//   for(let i=1;i<output1.totalrow;i++)
//   {
//   const Name=worksheet.getCell(output1.row1+i,output1.col1);
//   console.log("Value",Name.value)
//   //console.log("Value2",Name[i+1])
//   //let arr=[Name.value]
//   //console.log(arr[i])
//   }
  //cell1.value='g1'
  //await workbook.xlsx.writeFile('C:/Users/2352634/OneDrive - Cognizant/Documents/Automation/ExcelPractise.xlsx');
  }


}
module.exports = {LoginPageR};