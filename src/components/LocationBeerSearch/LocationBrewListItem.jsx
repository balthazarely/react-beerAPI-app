import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";

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
              {/* <div>{brewery.phone}</div> */}
            </Card.Meta>
            {/* <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description> */}
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  );
}
/* onClick={() => props.addToFavorites(props.breweryCard)} */
