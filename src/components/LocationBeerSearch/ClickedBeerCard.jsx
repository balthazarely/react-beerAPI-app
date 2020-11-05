import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { formatPhoneNumber } from "../Utility/_utility";
import { Link } from "react-router-dom";
import { createFavorite } from "../actions";
import { useDispatch } from "react-redux";

export default function ClickedBeerCard({ brewery, addToFavorites }) {
  const dispatch = useDispatch();

  return (
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
          <Button
            size="small"
            color="orange"
            as={Link}
            to={`/brewery/${brewery.id}`}
          >
            View Location
          </Button>
          <Button
            basic
            color="orange"
            // onClick={() => addToFavorites(brewery)}
            onClick={() => dispatch(createFavorite(brewery))}
          >
            Favorite
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
