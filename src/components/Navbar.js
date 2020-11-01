import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

export default function Nav({ setFormOpen }) {
  return (
    <Menu icon="labeled" inverted fixed="bottom" size="large" fluid widths={3}>
      <Menu.Item name="gamepad" header as={NavLink} exact to="/">
        <Icon name="beer" />
        CitySearch
      </Menu.Item>
      <Menu.Item
        name="gamepad"
        header
        as={NavLink}
        exact
        to="/singleBrewSearch"
      >
        <Icon name="gamepad" />
        Brewery
      </Menu.Item>
      <Menu.Item name="gamepad" header as={NavLink} exact to="/favorites">
        <Icon name="gamepad" />
        Favorites
      </Menu.Item>
    </Menu>
  );
}

{
  /* <Menu inverted fixed="bottom" size="huge">
<Container>
  <Menu.Item name="CitySearch" header as={NavLink} exact to="/" />
  <Menu.Item
    name="BrewerySearch"
    header
    as={NavLink}
    exact
    to="/singleBrewSearch "
  />
  <Menu.Item name="Favorites" header as={NavLink} exact to="/favorites" />
</Container>
</Menu> */
}
