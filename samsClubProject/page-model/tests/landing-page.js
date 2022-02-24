import { Selector } from 'testcafe'
import loginAndRegisterPage from '../pages/loginPage'
import mainPage from '../pages/mainPage';
import mainPageProduct from '../pages/mainPage'

fixture('Add and remove products to the cart')
    .page `https://www.sams.com.mx/`;

test('Add products to the cart', async t => {
  await t

  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .click(mainPage.searchBar)
  .typeText(mainPage.searchBar, 'pan')
  .pressKey('enter')
  .click(mainPage.plusButton)
  .click(mainPage.addItemButton)
  .expect(Selector ('.count').count).eql(1)
  
})
test('Remove products from the cart', async t => {
  await t

  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .click(mainPage.searchBar)
  .typeText(mainPage.searchBar, 'pan')
  .pressKey('enter')
  .click(mainPage.plusButton)
  .click(mainPage.addItemButton)
  .click(mainPage.cartPageLink)
  .click(mainPage.deleteItems)
  .click(mainPage.confirmDelItem)
  .expect(Selector('.count').count).eql(1-0)
  
})
