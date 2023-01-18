import { Then } from '@badeball/cypress-cucumber-preprocessor'

const RestaurantsPageObject = require('../pageObjects/restaurantsPageObject.js')

const restaurantsPageObject = new RestaurantsPageObject()

Then('I can filter by {string}, {string} and {string}', (location, day, people) => {
  restaurantsPageObject.verifyRestaurantPageHasLoaded()
  restaurantsPageObject.inputFilterOptions(location, day, people)
  restaurantsPageObject.selectFindRestaurantsButton()
})

Then('I click the first offer', () => {
  restaurantsPageObject.verifyRestaurantHeaderIsNotVisible()
  restaurantsPageObject.selectFirstRestaurantOffer()
})
