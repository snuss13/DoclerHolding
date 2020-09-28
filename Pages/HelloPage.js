const { By, until } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

class HelloPage
{

  driver;

  constructor(driver)
  {
    this.driver = driver;
  }

  async getHelloMessage()
  {
    await this.driver.wait(until.elementLocated(By.id("hello-text")), 5 * 1000);
    
    return await this.driver.findElement(By.id("hello-text")).getText();
  }
}

module.exports = HelloPage;
