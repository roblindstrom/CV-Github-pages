/// <reference types="Cypress"/>


describe('Test all Features', () => {

  it('Find about button on Navbar  ', () => {
    cy.visit('/')
    cy.get('[data-cy="navbarWork"').click();
  });

  it('Find Contact Me button on Navbar  ', () => {
    cy.visit('/')
    cy.get('[data-cy="navbarContactMe"').click();
  });
    
  it('Find about button on header  ', () => {
    cy.visit('/')
    cy.get('[data-cy="headerWork"').click();
  });
    
    it('Find Contact Me button on header', () => {
      cy.get('[data-cy="headerContactMe"').click();

    });

    it('Send email', () => {
      cy.get('[data-cy="contactMeName"').type('Test Name')
      cy.get('[data-cy="contactMeEmail"').type('Test@email.com')
      cy.get('[data-cy="contactMePhone"').type('0123456789')
      cy.get('[data-cy="contactMeMessage"').type('This is a test message!')
      cy.get('[data-cy="contactMeSubmit"').click()

    });


  

});