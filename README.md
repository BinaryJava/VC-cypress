# VC Cypress

Sample Cypress automation suite for VoucherCodes

## Prerequisities

1. Run `npm install` to install all required packages
1. Install cucumber json formatter somewhere that is accessible on your path - [GitHub](https://github.com/cucumber/json-formatter) - only needed for HTML report generation

## Please note

Cypress running headless chrome triggers the websites Recaptcha script. I have added a user agent to the script in order to allow headless runs.
However, some of the images and elements do not load correctly so headed is the default execution mode.

## Commands

| Command                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `npm run cypress-open` | Opens the Cypress GUI to configure and run tests          |
| `npm run cypress-run`  | Opens a chrome window and executes all available tests    |
| `npm run cypress-pass` | Opens a chrome window and executes passing test           |
| `npm run cypress-fail` | Opens a chrome window and executes delibrate failing test |

## Improvements

1. Generate device metadata automatically for HTML report
1. Allow passing of tags into command line
1. Install JS standard linter
1. Find a cucumber html reporter that doesn't require an external install
1. Decide which JS bundler ie. import vs require
