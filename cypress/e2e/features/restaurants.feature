@regression @restaurants
Feature: Restaurants - Search for an offer

  @filters
  Scenario: As a logged out user, I search for a specific restaurant offer using the filters
    Given I am on the homepage
    When I click the restaurants category
    And I can filter by "London", "Tomorrow" and "2"
    And I click the first offer
    Then the Get Voucher button is disabled
