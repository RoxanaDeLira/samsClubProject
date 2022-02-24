import { Selector } from 'testcafe'
import { CREDENTIALS } from '../data/constants';
import loginPage from '../pages/loginPage';
import loginAndRegisterPage from '../pages/loginPage'
import mainPage from '../pages/mainPage';
import registerPage from '../pages/registerPage';


fixture('Register and Login Process')
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
  .expect(registerPage.welcomeUsername.innerText).eql(`Hola, ${CREDENTIALS.VALID_USER.USERNAME}`)  
})

test('Invalid Register', async t => {
  await t
  
  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .click(loginAndRegisterPage.registerLink)
  .typeText(registerPage.username, CREDENTIALS.VALID_USER.USERNAME)
  .typeText(registerPage.lastname, CREDENTIALS.VALID_USER.LASTNAME)
  .typeText(registerPage.email, CREDENTIALS.INVALID_USER.WRONGEMAIL)
  .typeText(registerPage.confirmEmail, CREDENTIALS.INVALID_USER.WRONGEMAIL)
  .typeText(registerPage.password, CREDENTIALS.VALID_USER.PASSWORD)
  .typeText(registerPage.phoneNumber, CREDENTIALS.VALID_USER.PHONENUMBER)
  .click(registerPage.createAccountButton)
  .expect(registerPage.welcomeUsername.innerText).eql(`Bienvenido`)  
})

test('Login to the WebPage', async t => {
  await t
  
  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .typeText(loginPage.emailInputField, CREDENTIALS.VALID_USER.EMAIL)
  .typeText(loginPage.passwordInputField, CREDENTIALS.VALID_USER.PASSWORD)
  .click(loginPage.ingresarButton)
  .expect(registerPage.welcomeUsername.innerText).eql(`Hola, ${CREDENTIALS.VALID_USER.USERNAME}`)  
})

test('Invalid Login', async t => {
  await t
  
  .click(loginAndRegisterPage.dismissDialog)
  .click(loginAndRegisterPage.entendidoButton)
  .typeText(loginPage.emailInputField, CREDENTIALS.VALID_USER.EMAIL)
  .typeText(loginPage.passwordInputField, CREDENTIALS.INVALID_USER.WRONGPASSWORD)
  .click(loginPage.ingresarButton)
  .expect(loginPage.iniciarSesionSection.innerText).eql(`Iniciar Sesión`)  
})
