const { test } = require("@playwright/test");
const { PractisePage } = require("../Pageobject/Loginpage");
const { Coursetable } = require("../Pageobject/Coursetable");
const { Newtab_Newwindow } = require("../Pageobject/Newtab_Newwindow");
const { Externallink } = require("../Pageobject/Externallink");
const { HidingFunction } = require("../Pageobject/HidingFunction");
const { TitlepageandButtons } = require("../Pageobject/TitlepageandButtons");
const { Javapopup } = require("../Pageobject/Javapopup");
const { Framecheck } = require("../Pageobject/Framecheck");

test("PractisePage", async function ({ browser }) {
  const context = await browser.newContext();
  const page = await context.newPage();

  const practiseobj = new PractisePage(page);
  const titleobj = new TitlepageandButtons(page);
  const courseobj = new Coursetable(page);
  const newtabobj = new Newtab_Newwindow(page, context);
  const linkobj = new Externallink(page);
  const hideobj = new HidingFunction(page);  
  const popupobj = new Javapopup(page);
  const frameobj = new Framecheck(page);

  //URL and Pagetitle
  await practiseobj.URL();
  await practiseobj.radiobutton_dropdown("option3");
  await practiseobj.selectcountry("aus");

  //Title and Button enable check
  await titleobj.Maintitlecheck();
  await titleobj.titltcheck();
  await titleobj.buttoncheck();

  //Alertpopups and MouseHover
  await popupobj.alertpopup("Alert1");
  await popupobj.Mousehover();

  //HideandVisible Functionality
  await hideobj.visiblefunction();
  await hideobj.hidefunction();

  // Course table
  await courseobj.courseSelection("QA Expert");
  await courseobj.scroll();

  //New Link
  await linkobj.linkcheck();

  //Framecheck
  await frameobj.framescontent();

  //New tab
  await newtabobj.newtab(page, context);

  //New window
  await newtabobj.newwindow(page, context);

  // await page.pause();
});
