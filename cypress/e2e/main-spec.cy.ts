describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    // Open the browse modal
    cy.get('#browse-button > svg').click();

    // Select Bitcoin and Ethereum
    cy.findByRole('button', { name: /bitcoin bitcoin/i }).click();
    cy.findByRole('button', { name: /ethereum ethereum/i }).click();

    // Close the modal
    cy.get('#close-modal-button').click().should(() => {
      // Make sure the coins were saved to local storage
      const selectedCoins = JSON.parse(localStorage.getItem('selectedCoins'))
      expect(selectedCoins.length).to.eq(2)
    });

    // Make sure there is a chart
    cy.get('canvas');


    // Make sure there prices displayed
    cy.findByRole('heading', { name: /current prices/i });
    cy.get(':nth-child(2) > span')
  })
})