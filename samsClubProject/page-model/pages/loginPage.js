import { Selector, t } from 'testcafe';

class loginAndRegisterPage{
    constructor(){
    
        this.dismissDialog = Selector ('.smx-dialog-close')
        this.registerLink = Selector ('a[href="/registro"]')
        this.entendidoButton = Selector('.full-btn')
        this.emailInputField = Selector ('#email')
        this.passwordInputField = Selector ('#password')
        this.ingresarButton = Selector ('#buttonBlue')
        this.iniciarSesionSection = Selector ('.section-name')

    }
}
export default new loginAndRegisterPage();