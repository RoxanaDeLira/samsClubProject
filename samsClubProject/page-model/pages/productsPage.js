import { Selector, t } from 'testcafe';

class Products{
    constructor(){
 
        this.productPageTitle = Selector ('.title').withText('PRODUCTS')
        this.dropdownMenu = Selector ('#react-burger-menu-btn')
        this.logoutOption = Selector ('#logout_sidebar_link')
        this.sortOptions = Selector ('.product_sort_container')
        this.addItem1 = Selector ('#add-to-cart-sauce-labs-backpack')
        this.addItem2 = Selector ('#add-to-cart-sauce-labs-bike-light')
        this.addItem3 = Selector ('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.addItem4 = Selector ('#add-to-cart-sauce-labs-fleece-jacket')
        this.sortPriceLowtoHigh = this.sortOptions.find('option')
        this.addSauceLabsOnesieToTheCart = Selector ('#add-to-cart-sauce-labs-onesie')
        this.cartButton = Selector ('.shopping_cart_link')

    }

}
export default new Products();