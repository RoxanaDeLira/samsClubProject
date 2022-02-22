import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
 
        this.usernameInputfield = Selector ('#user-name')
        this.passwordInputfield = Selector ('#password')
        this.loginButton = Selector ('#login-button')
        this.loginContainerPage = Selector ('#login_button_container')
        this.errorMessage = Selector ('h3[data-test=error]')

    }
}
export default new LoginPage();