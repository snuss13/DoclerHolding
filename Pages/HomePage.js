const { Builder, By, Key, util, WebDriver, Capabilities } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { Options } = require('selenium-webdriver/chrome');
setDefaultTimeout(60 * 1000);

class HomePage
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

  async browseHome()
  {
    await (await (await this.driver).findElement(By.id('home'))).click();
  }

  async clickOnUITest()
  {
    await (await (await this.driver).findElement(By.css('#site'))).click();
  }

  async getTitle() {
    var title = await this.driver.findElement(By.css(".ui-test > h1"));
    var pageTitle = await title.getAttribute("innerHTML");
  
    return pageTitle;
  }

  async isHomeMenuActive()
  {
    var actriveButton = await (await this.driver).findElement(By.css('#navbar > ul > li.active'))
    var buttonText = await actriveButton.getText();
    return buttonText == 'Home';
  }

  async closeBrowser(){
     (await this.driver).close();
  }

  async getSubTitle() {
    var homeParagraph = await this.driver.findElement(By.css(".ui-test > p"));
    var pageSubTitle = await homeParagraph.getAttribute("innerHTML");

    return pageSubTitle;
  }
}

module.exports = new HomePage();
