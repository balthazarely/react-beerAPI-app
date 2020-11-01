import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";

export default function SingleBrewListItem({
  brewery,
  handleBreweryListClick,
}) {
  return (
    <Grid.Column>
      <Card.Group>
        <Card
          fluid
          href="#card-example-link-card"
          onClick={() => handleBreweryListClick(brewery)}
        >
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{brewery.name}</Card.Header>
            <Card.Meta>{brewery.city}</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  );
}
