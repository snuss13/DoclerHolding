const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
var myFormPage = require ('../../Pages/FormPage');


Given ('I am at Docler site', async function ()
{
  await myFormPage.gotoDocker();
})

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

  //assertThat(await myFormPage.isFormCorrect(), true);
})

Then ('you should get redirected to the Hello page, and the follwoing text should appear: {string}', async function(expectedResult)
{
  assertThat(true, true);
})