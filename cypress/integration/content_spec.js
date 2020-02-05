describe('Check content', function() {
  it("Contains character data", function() {
    cy.visit("http://localhost:3000")
    cy.get(':nth-child(1) > .card > .card-image > .image > img')
    cy.get(':nth-child(1) > .card > .card-content > .media > .media-content > .title').should('have.text', 'Rick Sanchez')
    cy.screenshot()
  })
})

