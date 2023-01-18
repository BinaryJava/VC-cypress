class SharedPageObject {
    select (element) {
        cy.get(element).click()
    }

    input (element, text) {
        cy.get(element).type(text)
    }

    // Returns a formatted date in the form YYYY-MM-DD
    formatDate (date) {
        const dateObject = new Date()
        switch (date) {
            case 'Today':
                return dateObject.toISOString().split('T')[0]
            case 'Tomorrow':
                dateObject.setDate(dateObject.getDate() + 1)
                return dateObject.toISOString().split('T')[0]
            default:
                return date
        }
    }

    selectDropdownOption (element, option) {
        cy.get(element).select(option)
    }

    verifyElementIsDisabled (element) {
        cy.get(element).should('have.attr', 'disabled', 'disabled')
    }

    verifyElementDoesNotExist (element) {
        cy.get(element).should('not.exist')
    }
}

module.exports = SharedPageObject
