import { Selector } from 'testcafe'
import { CREDENTIALS } from '../data/credentials'
import LoginPage from '../pages/loginPage'
import Products from '../pages/productsPage'
import yourCartPage from '../pages/yourCartPage'
import checkoutPage from '../pages/checkoutPageInfo'
import checkoutOverviewPage from '../pages/checkoutOverview'
import checkoutOverview from '../pages/checkoutOverview'


fixture('Launch webPage')
    .page `https://www.sams.com.mx/`;

test('Successfull launch', async t => {
  await t
    .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
    .click(LoginPage.loginButton)
    .expect(Products.productPageTitle.exists).ok()
    
})

/*
fixture('Login feature test')
    .page `https://www.saucedemo.com/`;

test('Successfull login by providing valid credentials', async t => {
  await t
    .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
    .click(LoginPage.loginButton)
    .expect(Products.productPageTitle.exists).ok()
    .takeScreenshot({
    path:     'fixture/login-with-valid-user.png',
    fullPage: true
      });
})

test('Successfull logout', async t => {
  await t
     .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
     .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
     .click(LoginPage.loginButton)
     .expect(Products.productPageTitle.exists).ok()
     .click(Products.dropdownMenu)
     .click(Products.logoutOption)
     .expect(LoginPage.loginContainerPage.exists).ok()
     .takeScreenshot({
      path:     'fixture/logout.png',
      fullPage: true
      });

}) 

test('Login with an invalid user', async t => {
   await t
     .typeText(LoginPage.usernameInputfield,CREDENTIALS.INVALID_USER.INVALIDUSERNAME)
     .typeText(LoginPage.passwordInputfield,CREDENTIALS.INVALID_USER.INVALIDPASSWORD)
     .click(LoginPage.loginButton)
     .expect(LoginPage.errorMessage.innerText).contains('Epic sadface: Username and password do not match any user in this service')
     .takeScreenshot({
      path:     'fixture/login-invalid-user.png',
      fullPage: true
      }); 
          
})

test('Sort Products by Price (low to high)', async t => {
   await t
     .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
     .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
     .click(LoginPage.loginButton)
     .click(Products.sortOptions)
     .click(Products.sortPriceLowtoHigh.withText('Price (low to high)'))
     .expect(Products.sortOptions.value).eql('lohi')
     .takeScreenshot({
      path:     'fixture/sort-by-price-low-to-high.png',
      fullPage: true
      });

})

test('Add multiple items to the cart', async t => {
  await t
   .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
   .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
   .click(LoginPage.loginButton)
   .click(Products.addItem1)
   .click(Products.addItem2)
   .click(Products.addItem3)
   .click(Products.addItem4)
   .click(Products.cartButton)
   .expect(yourCartPage.itemAdded1.exists).ok()
   .expect(yourCartPage.itemAdded2.exists).ok()
   .expect(yourCartPage.itemAdded3.exists).ok()
   .expect(yourCartPage.itemAdded4.exists).ok()
   .takeScreenshot({
      path:     'fixture/add-multiple-products-to-the-cart.png',
      fullPage: true
      }); 

})


test('Add the specific product Sauce Labs Onesie to the shopping cart', async t => {
    await t
     .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
     .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
     .click(LoginPage.loginButton)
     .click(Products.addSauceLabsOnesieToTheCart)
     .click(Products.cartButton)
     .expect(yourCartPage.productName.exists).ok()
     .takeScreenshot({
        path:     'fixture/add-product-to-the-cart.png',
        fullPage: true
        });

})

test('Complete the full purchase', async t => {
  await t
        .typeText(LoginPage.usernameInputfield,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInputfield,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(Products.addSauceLabsOnesieToTheCart)
        .click(Products.cartButton)
        .click(yourCartPage.checkoutButton)
        .typeText(checkoutPage.firstnameInputfield,CREDENTIALS.CHECKOUTORDER.FIRSTNAME)
        .typeText(checkoutPage.lastnameInputfield,CREDENTIALS.CHECKOUTORDER.LASTNAME)
        .typeText(checkoutPage.zipCodeInput, CREDENTIALS.CHECKOUTORDER.ZIPCODE)
        .click(checkoutPage.continueButton)
        .click(checkoutOverviewPage.finishButton)
        .expect(checkoutOverviewPage.ordeConfirmationTitle.exists).ok()
        .takeScreenshot({
         path:     'fixture/confirmation-order.png',
         fullPage: true
          });

}) 

*/