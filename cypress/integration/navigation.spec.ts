// eslint-disable-next-line @typescript-eslint/no-empty-function
describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
  });

  it("links are working", () => {
    cy.get("nav").contains("Issues").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/issues");
    cy.get("nav").contains("Projects").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.get("nav").contains("Alerts").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/alerts");
    cy.get("nav").contains("Users").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/users");
    cy.get("nav").contains("Settings").click();
    cy.url().should("eq", "http://localhost:3000/dashboard/settings");
  });
});
