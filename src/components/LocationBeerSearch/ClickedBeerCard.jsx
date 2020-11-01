import React from "react";
import { Card, Image } from "semantic-ui-react";
import { formatPhoneNumber } from "../Utility/_utility";

const cardStyles = {
  postion: "relative",
};

const btnStyles = {
  postion: "absolute",
  top: "-10px",
};

const ClickedBeerCard = ({ brewery }) => (
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
  </Card>
);

export default ClickedBeerCard;
