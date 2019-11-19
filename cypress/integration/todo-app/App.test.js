/// <reference types="Cypress" />

context('ToDo App', () => {
    before(() => {
        cy.visit("http://localhost:3000");
    });

    it("Renders without crashing", () => {
        cy.get("h1").contains("React To Do");
    });

    describe('the default UI', () => {
        it('renders two default todo items', () => {
            cy.get('.ToDoItem)').should('have.length', 2);
        })

        it('has an input field', () => {
            cy.get('input').should('have.length', 1);
        })

        it('has an input field - with testid', () => {
            cy.get('[data-testid="todo-input"]').should('have.length', 1);
        })

        it('has an add button', () => {
            cy.get('.ToDo-Add').should('have.length', 1);
        })
    })
})