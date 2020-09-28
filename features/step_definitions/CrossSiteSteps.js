const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
const { By } = require('selenium-webdriver')

var HomePage = require ('../../Pages/HomePage');
myHomePage = new HomePage ();

chDriver = myHomePage.driver;

When ('I am in {string}', async function(pageUT) {
  let siteUT = "http://uitest.duodecadits.com/" + pageUT + '.html';
  await chDriver.get(siteUT);
})

Then ('The title should be {string} on every site', async function(expectedTitle){
  let pagetTitle = await chDriver.getTitle();
  assertThat(pagetTitle,  expectedTitle);
})

Then ('The company logo should be visible', async function(){
  let imageUT = await chDriver.findElement(By.id('dh_logo')).getAttribute("src");
  assertThat(imageUT,  "http://uitest.duodecadits.com/assets/img/dh_company_lux_doclerholding.jpg");
})