import { Selector, t } from 'testcafe';

class mainPageProduct{
    constructor(){
    
    this.searchBar = Selector ('#searchBox')
    this.plusButton = Selector ('.btnPlus')
    this.addItemButton= Selector('#addToCart')
    this.cartPageLink = Selector('#header-cart')
    this.deleteItems = Selector ('.del-comment') 
    this.confirmDelItem = Selector ('#buttonBlue')
    this.noItemsAddedLabel = Selector ('.fullcartSubBox')

    }
}
export default new mainPageProduct();