import { When } from '@badeball/cypress-cucumber-preprocessor'

const NavbarPageObject = require('../pageObjects/navbarPageObject.js')

const navbarPageObject = new NavbarPageObject()

When('I click the restaurants category', () => {
  navbarPageObject.selectRestaurantCategory()
})
