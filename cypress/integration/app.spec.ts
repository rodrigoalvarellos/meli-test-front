describe("The Home Page", () => {

  it("shows the initial content", () => {
    cy.visit("/");
    
    cy.get('input').type('bicicleta');
    cy.get('button').click();

    cy.wait(500);

    
    
    // expect(true).to.equal(true);
    cy.url().should('eq', 'http://localhost:3000/items?search=bicicleta');

    
    // cy.get('input').should()

    // cy.get();

    //   cy.get(".Text__Title-Endpoint > span").should("contain", "Welcome!");

    //   cy.get(".Text__Description-Endpoint").should(
    //     "contain",
    //     "You can navigate and search endpoints."
    //   );
  });
});
