import { Selector, t } from 'testcafe';

class loginAndRegisterPage{
    constructor(){
    
        this.dismissDialog = Selector ('.smx-dialog-close')
        this.registerLink = Selector ('a[href="/registro"]')
        this.entendidoButton = Selector('.full-btn')

    }
}
export default new loginAndRegisterPage();