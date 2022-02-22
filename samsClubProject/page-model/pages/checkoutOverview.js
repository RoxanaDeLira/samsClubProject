import { Selector, t } from 'testcafe';

class checkoutOverviewPage{
    constructor(){
 
    
        this.finishButton = Selector ('#finish')
        this.ordeConfirmationTitle = Selector ('.complete-header').withText('THANK YOU FOR YOUR ORDER')

    }
}
export default new checkoutOverviewPage();