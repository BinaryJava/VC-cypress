import { Given, When } from '@badeball/cypress-cucumber-preprocessor'

const HomePageObject = require('../pageObjects/homePageObject.js')

const homePageObject = new HomePageObject()

Given('I am on the homepage', () => {
  homePageObject.loadHomePage()
  homePageObject.verifyHomePageHasLoaded()
})

When('I click the first top offer', () => {
  homePageObject.selectFirstTopOffer()
})
