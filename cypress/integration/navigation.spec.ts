// eslint-disable-next-line @typescript-eslint/no-empty-function
describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
  });

  it("links are working", () => {
    cy.get("nav").contains("Issues").click();
  });
});
