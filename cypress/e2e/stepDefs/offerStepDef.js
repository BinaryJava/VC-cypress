import { Then } from '@badeball/cypress-cucumber-preprocessor'

const OfferPageObject = require('../pageObjects/offerPageObject.js')

const offerPageObject = new OfferPageObject()

Then('the Get Voucher button is disabled', () => {
  offerPageObject.verifyOfferPageHasLoaded()
  offerPageObject.verifyGetVoucherButtonIsDisabled()
})
