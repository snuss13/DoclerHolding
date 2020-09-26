const { Builder, By, Key, util } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { Options } = require('selenium-webdriver/chrome');
setDefaultTimeout(60 * 1000);

class FormPage
{

  driver;

  constructor()
  {
    var chrome_options = new Options();
    chrome_options.addArguments("--disable-extensions")
    //chrome_options.add_argument("--disable-gpu")
    chrome_options.addArguments("--headless")

    this.driver =  new Builder().forBrowser('chrome').setChromeOptions(chrome_options).build();
  }

  async gotoDocker()
  {
    await this.driver.get("http://uitest.duodecadits.com/");
  }

  async browseForm()
  {
    var button = await this.driver.findElement(By.id('form'));
    button.click();
  }

  async getTitle() {
    var title = await this.driver.findElement(By.css(".ui-test > h1"));
    var pageTitle = await title.getAttribute("innerHTML");
  
    return pageTitle;
  }

  async isFormMenuActive()
  {
    var actriveButton = await (await this.driver).findElement(By.css('#navbar > ul > li.active'))
    var buttonText = await actriveButton.getText();
    return buttonText == 'Form';
  }

  async isFormVisible()
  {

    return await (await this.driver.findElement(By.id('hello-form'))).isDisplayed();
  }

  async writeName(value)
  {
    await this.driver.findElement(By.id('hello-input')).sendKeys(value);
  }

  async submitForm(value)
  {
    await this.driver.findElement(By.id('hello-submit')).click();
  }

  // hello-text


  // async closeBrowser(){
  //    (await this.driver).close();
  // }

}

module.exports = new FormPage();
