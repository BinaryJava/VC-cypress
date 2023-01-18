const SharedPageObject = require("./shared/sharedPageObject.js")

class HomePageObject extends SharedPageObject {
  LOGO = '[data-qa="el:vcLogoLink"]'
  SEARCH_BAR = '[data-qa="el:searchInput"]'
  LOGIN_SIGNUP_BUTTON = '[data-qa="el:signUpLogInButton"]'
  SUBMENU_LINKS = '[data-qa="el:subMenuLinks"]'
  TOP_OFFERS_SECTION = '[data-qa="el:topOffersSection"]'
  FIRST_TOP_OFFER = '[data-qa="el:topOffersSection"] a:nth-child(1) [data-qa="el:offerCard"]'

  verifyHomePageHasLoaded () {
    const elements = [
      this.LOGO,
      this.SEARCH_BAR,
      this.LOGIN_SIGNUP_BUTTON,
      this.SUBMENU_LINKS
    ]
    elements.forEach(element => cy.get(element))
  }

  loadHomePage () {
    cy.visit('/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
      }
      // Option used to verify 403 forbidden error
      // failOnStatusCode: false
    })
  }

  selectFirstTopOffer () {
    this.select(this.FIRST_TOP_OFFER)
  }
}

module.exports = HomePageObject
