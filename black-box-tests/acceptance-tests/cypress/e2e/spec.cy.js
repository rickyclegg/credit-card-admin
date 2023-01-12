describe('template spec', () => {
  const getNoCardsWarning = () => cy.get('[data-testid="no-cards-warning"]')

  it('has no credit cards when starting', () => {
    cy.visit('http://localhost:3000')

    getNoCardsWarning().should('be.visible');
  })
})
