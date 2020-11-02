import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";

export default function MyFavoritesListCard({ favorite, removeFavorite }) {
  return (
    <Grid.Column>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header style={{ fontSize: "12px" }}>
              {favorite.name}
            </Card.Header>
            <Card.Meta>
              {favorite.street} , {favorite.city}, {favorite.state}
            </Card.Meta>
            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  );
}
