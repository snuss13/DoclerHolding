const { Builder, By, Key, util } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { Options } = require('selenium-webdriver/chrome');
setDefaultTimeout(60 * 1000);

class ErrorPage
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

  async browseError()
  {
    await (await (await this.driver).findElement(By.css('#error'))).click();
  }

  async getHTTPResponse() {
    var title = await this.driver.findElement(By.css("body > h1"));
    var pageTitle = await title.getAttribute("innerHTML");
  
    return pageTitle;
  }
}

module.exports = new ErrorPage();
