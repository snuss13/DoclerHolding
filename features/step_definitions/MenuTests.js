const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');

var HomePage = require ('../../Pages/HomePage');
myHomePage = new HomePage ();

var FormPage = require ('../../Pages/FormPage');
myFormPage = new FormPage(myHomePage.driver);

var ErrorPage = require ('../../Pages/ErrorPage');
myErrorPage = new ErrorPage(myHomePage.driver);

Given ('I am at Docler site', async function ()
{
  await myHomePage.gotoDocker();
})

When ('I click the Home button', async function() 
{
  await myHomePage.browseHome();
})

When ('I click the Form menu button', async function() 
{
  await myFormPage.browseForm();
})

When ('I click the UI Testing button', async function() 
{
  await myHomePage.clickOnUITest();
})

When ('I click the Error button', async function() 
{
  await myErrorPage.browseError();
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

Then ('I should get a 404 HTTP response code', async function()
{
  var pageTitle = await myErrorPage.getHTTPResponse();
  assertThat(pageTitle, '404 Error: File not found :-(');
})

Then ('it should turn Home button to active status', async function()
{
  assertThat(await myHomePage.isHomeMenuActive(), true);
})

Then ('it should turn Form button to active status', async function()
{
  assertThat(await myFormPage.isFormMenuActive(), true);
})

