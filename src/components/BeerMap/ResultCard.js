import React from "react";
import { Header, Image, Table } from "semantic-ui-react";
import { truncateText } from "../Utility/_utility";

export default function ResultCard(props) {
  let brewName = truncateText(props.brew.name, 50);

  return (
    <Table.Row fluid>
      <Table.Cell selectable>
        <Header as="h4" image>
          <Image src="/beer.svg" rounded size="mini" />
          <Header.Content onClick={() => props.getClickedCard(props.brew)}>
            {brewName}
            <Header.Subheader>{props.brew.brewery_type}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>22</Table.Cell>
    </Table.Row>
  );
}
