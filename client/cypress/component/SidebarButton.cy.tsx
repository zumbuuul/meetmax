import React from "react";
import SidebarButton from "../../components/main/sidebar/SidebarButton";

const CY_TEXT = "CYPRESS TEST";
const CY_ROUTE = "TEST ROUTE";

it("It displays button text correctly", () => {
  cy.mount(<SidebarButton iconpath="pavle" buttontext={CY_TEXT} route="/" />);
  cy.get('[data-cy="main"]').contains(CY_TEXT);
});

it("It shows corresponding color based on current state", () => {
  cy.mount(<SidebarButton buttontext={CY_TEXT} iconpath="a" route="/" />);
  cy.get('[data-cy="first"]').click();
  cy.get('[data-cy="first"]').click();
  cy.get('[data-cy="main"]')
    .should("have.css", "background-color")
    .and("match", /(78, 93, 120)/);
  cy.get('[data-cy="second"]').click();
  cy.get('[data-cy="second"]').click();
  cy.get('[data-cy="main"]')
    .should("have.css", "background-color")
    .and("match", /(255, 255, 255)/);
});
