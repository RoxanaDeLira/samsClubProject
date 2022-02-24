import { Selector } from "testcafe";

class createAnAccountNewUser {
    constructor(){

        this.username = Selector ('#firstName')
        this.lastname = Selector ('#lastName')
        this.email = Selector ('#email')
        this.confirmEmail = Selector ('#confirmEmail')
        this.password = Selector ('#password')
        this.phoneNumber = Selector ('#mobileNumber')
        this.annoucementsCheckbox = Selector ('#allowMarketingEmail')
        this.createAccountButton = Selector ('#buttonBlue').withText('Crear cuenta')
        this.welcomeUsername = Selector ('.first-row')
        this.accountInformation =  Selector('.title-no-wrap').withText('Mi cuenta')
        
    }
}
export default new createAnAccountNewUser ();