//your JS code here. If required.
describe('Signup Modal Test', () => {
    it('should display the signup modal when the Sign Up button is clicked', () => {
        // Ensure the modal is initially hidden
        cy.get('#signupModal').should('not.be.visible');

        // Click the Sign Up button to open the modal
        cy.get('button').contains('Sign Up').click();

        // Verify the modal becomes visible
        cy.get('#signupModal').should('be.visible');
    });

    it('should close the signup modal when the Close button is clicked', () => {
        // Click the Sign Up button to open the modal
        cy.get('button').contains('Sign Up').click();

        // Verify the modal is visible
        cy.get('#signupModal').should('be.visible');

        // Click the Close button to close the modal
        cy.get('.modal .close').click();

        // Verify the modal is no longer visible
        cy.get('#signupModal').should('not.be.visible');
    });
});