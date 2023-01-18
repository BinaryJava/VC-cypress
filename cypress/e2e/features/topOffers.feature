@regression @topOffers
Feature: Top offers - Interact with top offers section

  @favourite
  Scenario: As a logged out user, I want to favourite a merchant from top offers
    Given I am on the homepage
    When I click the first top offer
    When I click the favourite button
    Then I can favourite the merchant
