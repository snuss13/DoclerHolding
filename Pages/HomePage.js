const { Builder, By, Key, util } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

class homePage
{

  driver;

  constructor()
  {
    this.driver =  new Builder().forBrowser('chrome').build();
  }

  async gotoDocker()
  {
    await this.driver.get("http://uitest.duodecadits.com/");
  }

  async browseHome()
  {
    await (await (await this.driver).findElement(By.id('home'))).click();
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

module.exports = new homePage();
