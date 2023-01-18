import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

const TopOffersPageObject = require('../pageObjects/topOffersPageObject.js')

const topOffersPageObject = new TopOffersPageObject()

When('I click the favourite button', () => {
  // Will fail here
  topOffersPageObject.verifyTopOffersPageHasLoaded()
  topOffersPageObject.selectFavouriteButton()
})

Then('I can favourite the merchant', () => {
  // TBD
})
