describe("index", () => {
  it("renders", () => {
    cy.visit("/");
    cy.get("body").should("have.value", "abc")
  });
});
