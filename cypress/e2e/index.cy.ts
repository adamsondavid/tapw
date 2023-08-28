describe("index", () => {
  it("renders", () => {
    cy.visit("/");
    cy.get('[data-cy="input"]').type("tapw");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="greeting"]').should("have.text", "Hello tapw");
  });
});
