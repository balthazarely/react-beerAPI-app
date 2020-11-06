import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { formatPhoneNumber } from "../Utility/_utility";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createFavorite, deleteFavorite } from "../../store/favoriteActions";

export default function ClickedBeerCard({ brewery, addToFavorites }) {
  const dispatch = useDispatch();

  const [isAlreadyAFavorite, setIsAlreadyAFavorite] = useState();
  const { favorites } = useSelector((state) => state.favorite);

  useEffect(() => {
    const even = (element) => element.id === Number(brewery.id);
    favorites.some(even)
      ? setIsAlreadyAFavorite(true)
      : setIsAlreadyAFavorite(false);
  });

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
          <Button size="small" as={Link} to={`/brewery/${brewery.id}`}>
            View Location
          </Button>
          {isAlreadyAFavorite ? (
            <Button
              color="olive"
              size="mini"
              onClick={() => dispatch(deleteFavorite(brewery.id))}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              color="orange"
              size="mini"
              onClick={() => dispatch(createFavorite(brewery))}
            >
              Add to Favorites
            </Button>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
