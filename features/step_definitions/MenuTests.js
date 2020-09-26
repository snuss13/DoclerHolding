const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
var myHomePage = require ('../../Pages/HomePage');
var myFormPage = require ('../../Pages/FormPage');


Given ('I am at Docler site', async function ()
{
  await myHomePage.gotoDocker();
})

Given ('I am at Docler form', async function ()
{
  await myFormPage.gotoDocker();
})

When ('I click the Home button', async function() 
{
  await myHomePage.browseHome();
})

When ('I click the Form button', async function() 
{
  await myFormPage.browseForm();
})

When ('I click the UI Testing button', async function() 
{
  await myHomePage.clickOnUITest();
})

Then ('I should get navigated to the Home page', async function()
{
  var pageTitle = await myHomePage.getTitle();
  assertThat(pageTitle, 'Welcome to the Docler Holding QA Department');
})

Then ('I should get navigated to the Form page', async function()
{
  var pageTitle = await myFormPage.getTitle();
  assertThat(pageTitle, 'Simple Form Submission');

})

Then ('it should turn Home to active status', async function()
{
  assertThat(await myHomePage.isHomeMenuActive(), true);
})

Then ('it should turn Form to active status', async function()
{
  assertThat(await myFormPage.isFormMenuActive(), true);
})




// Then ('', async function()
// {
  
// })