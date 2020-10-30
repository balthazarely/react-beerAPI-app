import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";

export default function BreweryCard(props) {
  console.log(props);
  return (
    <Card fluid color="red">
      <Card.Content>
        <Card.Header content={props.breweryCard.name} />
        <Card.Meta content={props.breweryCard.street} />
        <Card.Description content={props.breweryCard.city} />
        <Button
          circular
          icon="like"
          floated="right"
          onClick={() => props.addToFavorites(props.breweryCard)}
        />
        <Button as={Link} to={`/brewery/${props.breweryCard.id}`}>
          See More{" "}
        </Button>
      </Card.Content>
    </Card>
  );
}
