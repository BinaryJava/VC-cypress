const SharedPageObject = require("./shared/sharedPageObject.js")

class TopOffersPageObject extends SharedPageObject {
  MERCHANT_NAME = '[data-qa="el:merchantName"]'
  MERCHANT_SUBHEADING = '[data-qa="el:merchantSubHeading"]'
  MERCHANT_LOGO = '[data-qa="el:merchantLogo"]'
  FAVOURITE_BUTTON = '[data-qa="brokenSelector"]'
  VISIT_SITE_BUTTON = '[data-qa="el:visitSiteButton"]'

  verifyTopOffersPageHasLoaded () {
    const elements = [
      this.MERCHANT_NAME,
      this.MERCHANT_SUBHEADING,
      this.MERCHANT_LOGO,
      this.FAVOURITE_BUTTON,
      this.VISIT_SITE_BUTTON
    ]
    elements.forEach(element => cy.get(element))
  }

  selectFavouriteButton () {
    this.select(this.FAVOURITE_BUTTON)
  }
}

module.exports = TopOffersPageObject
