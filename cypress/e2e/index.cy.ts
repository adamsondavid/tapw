describe("index", () => {
  it("renders", () => {
    cy.visit("/");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="greeting"]').should("have.text", "Hello Tap Water");
  });
});
