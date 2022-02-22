import { Selector, t } from 'testcafe';

class cartPage{
    constructor(){
 
        this.productName = Selector ('.inventory_item_name').withText('Sauce Labs Onesie')
        this.checkoutButton = Selector ('#checkout')
        this.itemAdded1 = Selector ('.inventory_item_name').withText('Sauce Labs Backpack')
        this.itemAdded2 = Selector ('.inventory_item_name').withText('Sauce Labs Bike Light')
        this.itemAdded3 = Selector ('.inventory_item_name').withText('Sauce Labs Bolt T-Shirt')
        this.itemAdded4 = Selector ('.inventory_item_name').withText('Sauce Labs Fleece Jacket')

    }

}
export default new cartPage();