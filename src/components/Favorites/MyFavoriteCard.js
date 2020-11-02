import React from "react";
import { Header, Image, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function MyFavoriteCard(props) {
  return (
    <Table.Row>
      <Table.Cell selectable>
        <Header as="h4" image>
          <Image src="/beer.svg" rounded size="mini" />
          <Header.Content as={Link} to={`/brewery/${props.favorite.id}`}>
            {props.favorite.name}
            <Header.Subheader> {props.favorite.brewery_type}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{props.favorite.state}</Table.Cell>
    </Table.Row>
  );
}
