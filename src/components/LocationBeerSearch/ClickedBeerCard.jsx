import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { formatPhoneNumber } from "../Utility/_utility";
import { Link } from "react-router-dom";

const ClickedBeerCard = ({ brewery, addToFavorites }) => (
  <Card>
    <Image src={`/drinks.jpg`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{brewery.name}</Card.Header>
      <Card.Meta>
        <span className="date">{brewery.brewery_type}</span>
      </Card.Meta>
      <Card.Description>
        <div>{brewery.street}</div>
        <div> {brewery.city}</div>
        <div>{formatPhoneNumber(brewery.phone)}</div>
        <div>{brewery.website}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green" as={Link} to={`/brewery/${brewery.id}`}>
          View Location
        </Button>
        <Button basic color="red" onClick={() => addToFavorites(brewery)}>
          Favorite
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default ClickedBeerCard;
