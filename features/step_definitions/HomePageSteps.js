const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
var myHomePage = require ('../../Pages/HomePage');


Given ('I am at Home page', async function ()
{
  await myHomePage.gotoDocker();
})

Then ('the title {string} is visible', async function (desiredTitle)
{
  var pageTitle = await myHomePage.getTitle();
  assertThat(pageTitle, desiredTitle);

  //myhP.closeBrowser();
})

Then ('the paragraph message {string} is visible', async function (desiredMessage)
{
  var pageSubTitle = await myHomePage.getSubTitle();

  assertThat(pageSubTitle, desiredMessage);

 // myhP.closeBrowser();
})
