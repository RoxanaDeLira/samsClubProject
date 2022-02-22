import { Selector, t } from 'testcafe';

class checkoutPage{
    constructor(){
 
        this.firstnameInputfield = Selector ('#first-name')
        this.lastnameInputfield = Selector ('#last-name')
        this.zipCodeInput = Selector ('#postal-code')
        this.continueButton = Selector ('#continue')

    }
}
export default new checkoutPage();