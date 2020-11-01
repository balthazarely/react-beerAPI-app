import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";

export default function LocationBrewListItem({
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
            <Image floated="right" size="mini" src="beer.svg" />
            <Card.Header style={{ fontSize: "14px" }}>
              {brewery.name}
            </Card.Header>
            <Card.Meta>
              <div>{brewery.street}</div>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  );
}
/* onClick={() => props.addToFavorites(props.breweryCard)} */
