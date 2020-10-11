describe('test our form inputs', () =>{

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('add texts to inputs and submit form', ()=> {
        cy.get('[data-cy=name]').type('Daniel').should('have.value', 'Daniel');
        cy.get('[data-cy=email]').type('daniel@email.com').should('have.value', 'daniel@email.com');
        cy.get('[data-cy=motivation]').type('I want to help').should('have.value', 'I want to help');
        cy.get('[data-cy=positions]').select('Yard Work').should('have.value', 'Yard Work');
        cy.get('[type=checkbox]').check().should('be.checked');

        cy.get('[data-cy=submit]').click();
        cy.get('pre').should('exist');
    });
});