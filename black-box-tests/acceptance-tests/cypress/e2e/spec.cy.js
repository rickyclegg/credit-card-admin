describe('template spec', () => {
  const getNoCardsWarning = () => cy.get('[data-testid="no-cards-warning"]')
  const getCardRow = (value) => cy.get('#cardsTable tr').eq(value)
  const getAddFormField = (name) => cy.get(`input[name=${name}]`)
  const getByTestId = (el, id) => el.get(`[data-testid="${id}"]`)

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

    getByTestId(newCardRow, 'cardName').contains(expectedName)
    getByTestId(newCardRow, 'cardNumber').contains(expectedCardNum)
    getByTestId(newCardRow, 'cardLimit').contains(`£${expectedLimit}`)
    getByTestId(newCardRow, 'cardBalance').contains(`£${expectedBalance}`)
  })
})
