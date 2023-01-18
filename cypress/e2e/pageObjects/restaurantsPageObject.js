const SharedPageObject = require("./shared/sharedPageObject.js")

class RestaurantsPageObject extends SharedPageObject {
  PAGE_HEADING = 'h1[data-qa="el:restaurantHeading"]'
  LOCATION_LABEL = '[data-qa="el:locationHeading"]'
  LOCATION_INPUT = '[data-qa^="el:locationDropdown"]'
  DAY_LABEL = '[data-qa="el:dayHeading"]'
  DAY_INPUT = '[data-qa="el:dayDropdown"]'
  PEOPLE_LABEL = '[data-qa="el:peopleHeading"]'
  PEOPLE_INPUT = '[data-qa="el:peopleDropdown"]'
  FIND_RESTAURANTS_BUTTON = '[data-qa="el:findRestaurantsVoucherButton"]'
  FIRST_OFFER_BUTTON = '[data-module-position="1"] [data-qa="el:offerPrimaryButton"]'

  verifyRestaurantPageHasLoaded () {
    const elements = [
        this.PAGE_HEADING,
        this.LOCATION_LABEL,
        this.LOCATION_INPUT,
        this.DAY_LABEL,
        this.PEOPLE_LABEL,
        this.PEOPLE_INPUT,
        this.FIND_RESTAURANTS_BUTTON,
        this.FIRST_OFFER_BUTTON
    ]
    elements.forEach(element => cy.get(element))
  }

  inputFilterOptions (location, day, people) {
    this.select(this.LOCATION_INPUT)
    this.input(this.LOCATION_INPUT, location)
    this.selectDropdownOption(this.DAY_INPUT, day)
    this.selectDropdownOption(this.PEOPLE_INPUT, people)
  }

  selectFindRestaurantsButton () {
    this.select(this.FIND_RESTAURANTS_BUTTON)
  }

  selectFirstRestaurantOffer () {
    this.select(this.FIRST_OFFER_BUTTON)
  }

  // Required as otherwise selects first offer before search is complete
  verifyRestaurantHeaderIsNotVisible () {
    this.verifyElementDoesNotExist (this.PAGE_HEADING)
  }
}

module.exports = RestaurantsPageObject
