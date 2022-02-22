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
        this.createAccountButton = Selector ('#buttonBlue')

    }
}
export default new createAnAccountNewUser ();