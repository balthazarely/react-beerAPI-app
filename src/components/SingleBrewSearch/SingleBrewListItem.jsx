import React from "react";
import { Card, Button, Icon, Grid } from "semantic-ui-react";

export default function SingleBrewListItem({
  brewery,
  handleBreweryListClick,
}) {
  return (
    <Grid.Column>
      <Card fluid>
        <Card.Content header={brewery.name} />
        <Card.Content description={brewery.city} />
        <Card.Content extra>
          <a>
            <Icon
              onClick={() => handleBreweryListClick(brewery)}
              name="target"
            />
          </a>
        </Card.Content>
        {/* onClick={() => props.addToFavorites(props.breweryCard)} */}
      </Card>
    </Grid.Column>
  );
}
