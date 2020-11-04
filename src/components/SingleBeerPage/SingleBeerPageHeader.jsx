import React from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: 0,
};

export default function SingleBeerPageHeader({ brewery }) {
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
        <Button color="orange">Add to Favorites</Button>
        <Button as={Link} to={`/`}>
          Back to Map
        </Button>
      </Segment>
    </Segment.Group>
  );
}
