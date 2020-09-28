const { By, until, Key } = require('selenium-webdriver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

class FormPage
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

  async browseForm()
  {
    var button = await this.driver.findElement(By.id('form'));
    button.click();
  }

  async getTitle() {
    await this.driver.wait(until.elementLocated(By.css(".ui-test > h1"), 5 * 1000));
      
    return await this.driver.findElement(By.css(".ui-test > h1")).getAttribute("innerHTML");
  }

  async isFormMenuActive()
  {
    var actriveButton = await (await this.driver).findElement(By.css('#navbar > ul > li.active'))
    var buttonText = await actriveButton.getText();
    return buttonText == 'Form';
  }

  async isFormVisible()
  {
    let form = await this.driver.wait(until.elementLocated(By.id('hello-form'), 5 * 1000));
    return form.isDisplayed();
  }
  
  async hasImputBox()
  {
    let form = await this.driver.wait(until.elementLocated(By.id('hello-input'), 5 * 1000));
    return form.isDisplayed();
  }

  async hasSubmitBtn()
  {
    let form = await this.driver.wait(until.elementLocated(By.id('hello-submit'), 5 * 1000));
    return form.isDisplayed();
  }

  async writeName(value)
  {
    let el = await this.driver.wait(until.elementLocated(By.id('hello-input'), 5 * 1000));
    await el.sendKeys(value);
  }

  async submitForm(value)
  {
    await this.driver.findElement(By.id('hello-submit')).click();
  }

  // async closeBrowser(){
  //    (await this.driver).close();
  // }

}

module.exports = FormPage;
