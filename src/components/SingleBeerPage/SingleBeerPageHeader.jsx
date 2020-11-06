import React from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { createFavorite, deleteFavorite } from "../../store/favoriteActions";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: 0,
};

export default function SingleBeerPageHeader({ brewery, isAlreadyAFavorite }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment
        basic
        attached="top"
        style={{ padding: "0", position: "relative" }}
      >
        <div style={{ maxHeight: "300px", overflow: "hidden" }}>
          <Image src={`/drinks.jpg`} fluid style={eventImageStyle} />
        </div>
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={brewery.name}
                  style={{ color: "white" }}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {isAlreadyAFavorite ? (
          <Button
            color="orange"
            onClick={() => dispatch(deleteFavorite(brewery.id))}
          >
            Remove from Favorites
          </Button>
        ) : (
          <Button
            color="orange"
            onClick={() => dispatch(createFavorite(brewery))}
          >
            Add to Favorites
          </Button>
        )}

        <Button as={Link} to={`/`}>
          Back to Map
        </Button>
      </Segment>
    </Segment.Group>
  );
}
