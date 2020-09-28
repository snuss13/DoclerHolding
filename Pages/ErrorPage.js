const { By } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

class ErrorPage
{

  driver;

  constructor(driver)
  {
    this.driver = driver;
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

module.exports = ErrorPage;
