describe('Explorer page', () => {
  it('should be able to see the feed', () => {
    cy.visit('/app/explorer')
    cy.get('#thumbnail-book')
  })
  it('should be able to see infos about selected book', () => {
    cy.visit('/app/explorer')
    cy.get('#thumbnail-book').click()
    cy.get('#drawer-avaliate').contains('The Hobbit')
  })
})