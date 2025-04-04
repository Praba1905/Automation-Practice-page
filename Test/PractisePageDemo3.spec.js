const { test } = require("@playwright/test");
const { POManager } = require("../Pageobject/POManager");
const data = JSON.parse(
  JSON.stringify(require("../Data/Practisepagedata.json"))
);

test("PractisePage", async function ({ browser }) {
  const context = await browser.newContext();
  const page = await context.newPage();

  const manageobj = new POManager(context, page);
  const practiseobj = manageobj.getLoginpage();
  const courseobj = manageobj.getCoursetable();
  const newtabobj = manageobj.getNewtab_Newwindow();
  const linkobj = manageobj.getExternallink();
  const hideobj = manageobj.getHidingFunction();
  const titleobj = manageobj.getTitlepageandButtons();
  const popupobj = manageobj.getJavapopup();
  const frameobj = manageobj.getFramework();

  await practiseobj.URL();
  await practiseobj.radiobutton_dropdown(data.options);
  await practiseobj.selectcountry(data.country);

  //Title and Button enable check
  await titleobj.Maintitlecheck();
  await titleobj.titltcheck();
  await titleobj.buttoncheck();

  //Alertpopups and MouseHover
  await popupobj.alertpopup(data.Name);
  await popupobj.Mousehover();

  //HideandVisible Functionality
  await hideobj.visiblefunction();
  await hideobj.hidefunction();

  //New Link
  await linkobj.linkcheck(page);

  // Course table
  await courseobj.courseSelection(data.course);
  await courseobj.scroll();

  // Framecheck
  await frameobj.framescontent();

  //New tab
  await newtabobj.newtab(page, context);

  //New window
  await newtabobj.newwindow(page, context);

  // await page.pause();
});
