import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

export default function Nav({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item name="FindBeer" header as={NavLink} exact to="/" />
        <Menu.Item name="Favorites" header as={NavLink} exact to="/favorites" />
      </Container>
    </Menu>
  );
}
