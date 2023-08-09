// eslint-disable-next-line @typescript-eslint/no-empty-function
import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectLanguage } from "features/projects/types/project.types";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // set desktop viewport
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");

    // wait for the projects response
    cy.wait("@getProjects");
  });

  it("renders the projects", () => {
    const languageNames = {
      [ProjectLanguage.react]: "React",
      [ProjectLanguage.node]: "Node.js",
      [ProjectLanguage.python]: "Python",
    };
    cy.get("main")
      .find("li")
      .each(($el, index) => {
        const projectLanguage = mockProjects[index].language as ProjectLanguage;
        // check the project data is rendered
        cy.wrap($el).contains(mockProjects[index].name);
        cy.wrap($el).contains(languageNames[projectLanguage]);
        cy.wrap($el).contains(mockProjects[index].numIssues);
        cy.wrap($el).contains(mockProjects[index].numEvents24h);
        cy.wrap($el).contains(capitalize(mockProjects[index].status));
        cy.wrap($el).find("a").should("have.attr", "href", "/dashboard/issues");
      });
  });
});
