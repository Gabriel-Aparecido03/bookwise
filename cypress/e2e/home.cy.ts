describe('Home page', () => {
  it('should be able to see the feed', () => {
    cy.visit('/app')
    cy.get('#post').find('div')
  })
  it('should be able to see the popular books', () => {
    cy.visit('/app')
    cy.contains('Popular books')

    cy.get('#thumbnail-book')
  })
})