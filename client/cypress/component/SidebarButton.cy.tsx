import React from "react";
import SidebarButton from "../../components/main/sidebar/SidebarButton";

const text = "pavle";

describe("test", () => {
  it("tests", () => {
    cy.mount(<SidebarButton iconpath="pavle" buttontext={text} />);
    cy.get('[data-cy="main"]').contains(text);
  });
});
