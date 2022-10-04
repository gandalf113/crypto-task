## Crypto Task
Click here to see the working demo hosted on Vercel.
### [Live Demo](https://ulam-crypto-task.vercel.app/)
***IMPORTANT!*** The Coingecko API has a call rate limit, and it results in CORS error when it has been exceeded. If you encounter a Cors error, try refreshing the page or trying out the app on localhost.

# Introduction
A single-page application that allows user to select up to five currencies. The 24 hours coin price data is then plotted on a chart and displayed alongside current prices. The selected coins are stored persisently in local storage.
<br>


<img src="/preview.jpg">

# Tech Stack
Originally I wrote this in React with plain Javascript, but decided to rewrite the whole thing in TypeScript last minute. For styling I used TailwindCSS, because I love the speed at which it lets me style my components. The chart is utilizing chart.js and react-chartjs-2 libraries. For E2E testing I used Cypress.

# Components
### MainView
>/src/components/main.component.tsx

Main view of the application. It shows the chart and current prices of user selected coins.

### Sidebar
>/src/components/sidebar.component.tsx

Only shows on large screens. Sidebar displaying a list of cryptocurrencies that are fetched from the API. User can select or unselect the currencies by clicking on them. On smaller screens, it is replaced with BrowseCoinsModal.

### Chart
>/src/components/chart.component.tsx

Line chart meant for showing 24 hour coin prices.

### CurrentPriceSection
>/src/components/price-section.tsx

Displays prices of currently selected coins.

### Backdrop
>/src/components/modals/backdrop.component.tsx

Backdrop for the modal.

### Modal
>/src/components/modals/base-modal.component.tsx

A generic modal. Content should be passed as children.

### SettingsModal
>/src/components/modals/settings.component.tsx

User modify two variables: decimation and vs_currency. They are then updated in the context

### BrowseCoinsModal
>/src/components/modals/browse-coins.component.tsx

This is basically a sidebar, but displayed in a form of a modal on smaller screens. Allows for searching and selecting cryptocurrencies

### CoinLimitModal
>/src/components/modals/coin-limit.component.tsx

Pops up to inform the user that they can only select up to 5 currencies.

# Context
### CoinSelectorContext
> /src/context/coin-selector-context.tsx

Manages the state of selected coins.

### SettingsContext
> /src/context/settings-context.tsx

Manages the global settings: vsCurrency (pln or usd) and chart decimation

# Hooks
### useAutoClose
> /src/hooks/use-auto-close.tsx

Triggers handleClose() function when screen width reaches a passed number in pixels. It's used to close the BrowseCoinsModal on bigger screens.

### useData
> /src/hooks/use-data.tsx

Fetches 24 hour coin price data and prepares it for plotting on the chart.

### useHttp
> /src/hooks/use-http.tsx

Fetches data from provided url and provides isLoading state.

# Testing

### E2E
In order to run E2E test, run 'npx cypress open', go to E2E Testing, choose a browser envioroment and start the tests.

There is only one E2E test located at /cypress/e2e/main-spec.cy.ts

### Unit test
Unit tests can be found at /src/__tests__/. I only wrote tests for util functions.

