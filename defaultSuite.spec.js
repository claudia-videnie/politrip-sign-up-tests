// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Invalid Password - no digit', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("abcdefgh")
    {
      const elements = await driver.findElements(By.css("#sign-up-password-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Invalid Password - no lower', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("abcdefgh1")
    {
      const elements = await driver.findElements(By.css("#sign-up-password-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Invalid Password - no upper', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("ABCDEFGH1")
    {
      const elements = await driver.findElements(By.css("#sign-up-password-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Invalid Password - too short', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("abc")
    {
      const elements = await driver.findElements(By.css("#sign-up-password-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Invalid Password confirmation', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 550, height: 687 })
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    await driver.findElement(By.id("sign-up-confirm-password-input")).click()
    await driver.findElement(By.id("sign-up-confirm-password-input")).sendKeys("GcLwVuaZb5UQ3T")
    {
      const elements = await driver.findElements(By.css("#sign-up-confirm-password-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Invalid e-mail address', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("popescu")
    {
      const elements = await driver.findElements(By.css("#sign-up-email-div > .ng-invalid:nth-child(3)"))
      assert(elements.length)
    }
  })
  it('Sign Up as Organizer', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 550, height: 687 })
    await driver.findElement(By.id("first-name")).click()
    await driver.findElement(By.id("first-name")).sendKeys("Maria")
    await driver.findElement(By.id("last-name")).click()
    await driver.findElement(By.id("last-name")).sendKeys("Popa")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("maria.popa2@test.com")
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    await driver.findElement(By.id("sign-up-confirm-password-input")).click()
    await driver.findElement(By.id("sign-up-confirm-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    {
      const element = await driver.findElement(By.css(".button-label"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("sign-up-heard-div"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".button-label")).click()
    await driver.findElement(By.css("#qa_signup-organizer h4")).click()
  })
  it('Sign Up as Participant', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 550, height: 687 })
    await driver.findElement(By.id("first-name")).click()
    await driver.findElement(By.id("first-name")).sendKeys("Ana")
    await driver.findElement(By.id("last-name")).click()
    await driver.findElement(By.id("last-name")).sendKeys("Popescu")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("ana.popescu3@test.com")
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    await driver.findElement(By.id("sign-up-confirm-password-input")).click()
    await driver.findElement(By.id("sign-up-confirm-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    {
      const element = await driver.findElement(By.css(".button-label"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("sign-up-confirm-password-label"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".button-label")).click()
    await driver.findElement(By.css("#qa_signup-participant .benefits")).click()
  })
  it('Used e-mail address', async function() {
    await driver.get("https://politrip.com/account/sign-up")
    await driver.manage().window().setRect({ width: 665, height: 687 })
    await driver.findElement(By.id("first-name")).click()
    await driver.findElement(By.id("first-name")).sendKeys("Maria")
    await driver.findElement(By.id("last-name")).click()
    await driver.findElement(By.id("last-name")).sendKeys("Popa")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("maria.popa2@test.com")
    await driver.findElement(By.id("sign-up-confirm-password-input")).click()
    await driver.findElement(By.id("sign-up-confirm-password-input")).click()
    await driver.findElement(By.id("sign-up-password-input")).click()
    await driver.findElement(By.id("sign-up-confirm-password-input")).sendKeys("GcLwVuaZb5UQ3TM")
    await driver.findElement(By.css(".button-label")).click()
    {
      const elements = await driver.findElements(By.id("sign-up-error-div"))
      assert(elements.length)
    }
  })
})
