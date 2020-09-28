const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
const { Builder } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome');
const FormPage = require('../../Pages/FormPage');
const HelloPage = require('../../Pages/HelloPage');

myFormPage = new FormPage();

When ('I click the Form button', async function ()
{
  await myFormPage.browseForm();
})

When ('if you type {string} in the input field and submit the form', async function (ValueToSubmit)
{
  await myFormPage.writeName(ValueToSubmit);
  await myFormPage.submitForm();
})

Then ('a form should be visible with one input box and one submit button', async function()
{
  assertThat(await myFormPage.isFormVisible(), true);
  assertThat(await myFormPage.hasImputBox(), true);
  assertThat(await myFormPage.hasSubmitBtn(), true);

})

Then ('you should get redirected to the Hello page, and the follwoing text should appear: {string}', async function(expectedResult)
{
  myHelloPage = new HelloPage(myFormPage.driver);
  var helloMsg = await myHelloPage.getHelloMessage();
  assertThat(expectedResult, helloMsg);
})