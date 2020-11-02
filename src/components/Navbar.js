import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

export default function Nav() {
  return (
    <Menu icon="labeled" inverted fixed="bottom" size="large" fluid widths={3}>
      <Menu.Item name="gamepad" header as={NavLink} exact to="/">
        <Icon name="beer" />
        CitySearch
      </Menu.Item>

      <Menu.Item name="gamepad" header as={NavLink} exact to="/favorites">
        <Icon name="like" />
        Favorites
      </Menu.Item>
    </Menu>
  );
}
