const SharedPageObject = require("./shared/sharedPageObject.js")

class NavbarPageObject extends SharedPageObject {
  CATEGORIES_LINK = '[id="categories-dialog"]'
  RESTAURANT_LINK = 'a[href="/restaurant-vouchers.html"][data-qa="el:adminableCategory"]'

  selectRestaurantCategory () {
    this.select(this.CATEGORIES_LINK)
    this.select(this.RESTAURANT_LINK)
  }
}

module.exports = NavbarPageObject
