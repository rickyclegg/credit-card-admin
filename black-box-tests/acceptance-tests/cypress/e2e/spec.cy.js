describe('template spec', () => {
  const getNoCardsWarning = () => cy.get('[data-testid="no-cards-warning"]')
  const getCardRow = (value) => cy.get('#cardsTable tr').eq(value)

  it('has no credit cards when starting', () => {
    cy.visit('/')

    getNoCardsWarning().should('be.visible');
  })

  it('adds a new card to the system', () => {
    const expectedName = 'Alice'
    const expectedCardNum = '1111 2222 3333 4444'
    const expectedLimit = 2000
    const expectedBalance = 0

    cy.visit('/')

    cy.get('#name').type(expectedName)
    cy.get('#cardNumber').type(expectedCardNum)
    cy.get('#limit').type(expectedLimit)
    cy.get('input[type="submit"]').click()

    const newCardRow = getCardRow(1)

    newCardRow.get('.card-name').contains(expectedName)
    newCardRow.get('.card-number').contains(expectedCardNum)
    newCardRow.get('.card-limit').contains(expectedLimit)
    newCardRow.get('.card-balance').contains(expectedBalance)
  })
})
