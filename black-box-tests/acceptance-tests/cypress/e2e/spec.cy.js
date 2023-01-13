describe('template spec', () => {
  const getNoCardsWarning = () => cy.get('[data-testid="no-cards-warning"]')
  const getCardRow = (value) => cy.get('#cardsTable tr').eq(value)
  const getAddFormField = (name) => cy.get(`input[name=${name}]`)
  const getByTestId = (id, el) => (el ? el : cy).get(`[data-testid="${id}"]`)

  it('shows loading cards message on startup', () => {
    cy.visit('/')

    getByTestId('loadingCards')
  })

  it('has no credit cards when starting', () => {
    cy.visit('/')

    getNoCardsWarning().should('be.visible')
  })

  it('adds a new card to the system', () => {
    const expectedName = 'Alice'
    const expectedCardNum = '1111 2222 3333 4444'
    const expectedLimit = 2000
    const expectedBalance = 0

    cy.visit('/')

    getAddFormField('addName').type(expectedName)
    getAddFormField('addCardNumber').type(expectedCardNum)
    getAddFormField('addLimit').type(expectedLimit)
    cy.get('input[type="submit"]').click()

    const newCardRow = getCardRow(1)

    getByTestId('cardName', newCardRow).contains(expectedName)
    getByTestId('cardNumber', newCardRow).contains(expectedCardNum)
    getByTestId('cardLimit', newCardRow).contains(`£${expectedLimit}`)
    getByTestId('cardBalance', newCardRow).contains(`£${expectedBalance}`)
  })
})
