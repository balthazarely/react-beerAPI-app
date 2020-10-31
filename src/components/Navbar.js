import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

export default function Nav({ setFormOpen }) {
  return (
    <Menu inverted fixed="bottom">
      <Container>
        <Menu.Item name="CitySearch" header as={NavLink} exact to="/" />
        <Menu.Item
          name="BrewerySearch"
          header
          as={NavLink}
          exact
          to="/singleBrewSearch"
        />
        <Menu.Item name="Favorites" header as={NavLink} exact to="/favorites" />
      </Container>
    </Menu>
  );
}
