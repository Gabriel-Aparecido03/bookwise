describe('template spec', () => {
  it('passes', () => {

    const username = Cypress.env("GOOGLE_USER")
    const password = Cypress.env("GOOGLE_PW")
    const loginUrl = Cypress.env("SITE_NAME")

    const socialLoginOptions = {
      username: username,
      password: password,
      loginUrl: loginUrl,
      headless: true,
      logs: false,
      loginSelector: '[href="/auth/auth0/google-oauth2"]',
      postLoginSelector: '.account-panel'
    }
    
    cy.visit('/')
    cy.contains('button','Sign in with Google')
    cy.contains('button','Sign in with Github')
    cy.contains('button','Sign in with Guest')
  })
})