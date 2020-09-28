const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat } = require('hamjest');
const { Builder } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome');
const HomePage = require('../../Pages/HomePage');

// var chrome_options = new Options();
//     chrome_options.addArguments("--disable-extensions")
//     chrome_options.addArguments("--headless")

// var driver =  new Builder().forBrowser('chrome').setChromeOptions(chrome_options).build();

myHomePage = new HomePage();

Given ('I am at Home page', async function ()
{
  await myHomePage.gotoDocker();
})

Then ('the title {string} is visible', async function (desiredTitle)
{
  var pageTitle = await myHomePage.getTitle();
  assertThat(pageTitle, desiredTitle);
})

Then ('the paragraph message {string} is visible', async function (desiredMessage)
{
  var pageSubTitle = await myHomePage.getSubTitle();

  assertThat(pageSubTitle, desiredMessage);
})
