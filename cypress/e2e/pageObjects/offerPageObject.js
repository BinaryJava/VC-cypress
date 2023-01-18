const SharedPageObject = require("./shared/sharedPageObject.js")

class OfferPageObject extends SharedPageObject {
  OFFER_CARD = 'article[class="offer js-offer"]'
  GET_VOUCHER_BUTTON = 'div[class="offer__code-container"] > span'


  verifyOfferPageHasLoaded () {
    const elements = [
        this.OFFER_CARD,
        this.GET_VOUCHER_BUTTON
    ]
    elements.forEach(element => cy.get(element))
  }

  selectGetVoucherButton () {
    this.click(this.GET_VOUCHER_BUTTON)
  }

  verifyGetVoucherButtonIsDisabled () {
    this.verifyElementIsDisabled(this.GET_VOUCHER_BUTTON)
  }

  selectFavouriteButton () {
    
  }
}

module.exports = OfferPageObject
