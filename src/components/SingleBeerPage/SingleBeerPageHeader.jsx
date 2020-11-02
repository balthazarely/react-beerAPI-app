import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "100px",
  color: "white",
};

export default function SingleBeerPageHeader({ brewery }) {
  return (
    <Segment.Group>
      <Segment
        basic
        attached="top"
        style={{ padding: "0", height: "200px", overflow: "hidden" }}
      >
        <Image src={`/drinks.jpg`} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={brewery.name}
                  style={{ color: "white" }}
                />
                <p>
                  {brewery.city}, {brewery.state}
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>
      </Segment>
    </Segment.Group>
  );
}
