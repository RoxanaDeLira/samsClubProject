import { Selector } from 'testcafe'
import { CREDENTIALS } from '../data/constants';
import loginAndRegisterPage from '../pages/loginPage'
import mainPage from '../pages/mainPage';
import registerPage from '../pages/registerPage';


fixture('Launch webPage')
    .page `https://www.sams.com.mx/login`;

test('Create an account for a new user', async t => {
  await t
  
  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .click(loginAndRegisterPage.registerLink)
  .typeText(registerPage.username, CREDENTIALS.VALID_USER.USERNAME)
  .typeText(registerPage.lastname, CREDENTIALS.VALID_USER.LASTNAME)
  .typeText(registerPage.email, CREDENTIALS.VALID_USER.EMAIL)
  .typeText(registerPage.confirmEmail, CREDENTIALS.VALID_USER.EMAIL)
  .typeText(registerPage.password, CREDENTIALS.VALID_USER.PASSWORD)
  .typeText(registerPage.phoneNumber, CREDENTIALS.VALID_USER.PHONENUMBER)
  .click(registerPage.annoucementsCheckbox)
  .click(registerPage.createAccountButton)
  
    
})
