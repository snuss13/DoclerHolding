const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
var myHomePage = require ('../../Pages/HomePage');


Given ('I am at Docler site', async function ()
{
  await myHomePage.gotoDocker();
})

When ('I click the Home button', async function() 
{
  await myHomePage.browseHome();
})

Then ('I should get navigated to the Home page', async function()
{
  var pageTitle = await myHomePage.getTitle();
  assertThat(pageTitle, 'Welcome to the Docler Holding QA Department');
})

Then ('it should turn to active status', async function()
{
  assertThat(await myHomePage.isHomeMenuActive(), true);
})




// Then ('', async function()
// {
  
// })