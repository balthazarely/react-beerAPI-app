import React from "react";
import { Card, Button, Icon, Grid } from "semantic-ui-react";
import style from "./MyFavoritesListCard.module.css";
import { Link } from "react-router-dom";

export default function MyFavoritesListCard({
  favorite,
  removeFavorite,
  clickedCard,
}) {
  return (
    <Grid.Column>
      <Card.Group>
        <Card fluid className={style.card} href="#card-example-link-card">
          <Card.Content>
            <Card.Header
              as={Link}
              to={`/brewery/${favorite.id}`}
              style={{ maxWidth: "300px" }}
            >
              <div className={style.header}>{favorite.name}</div>
            </Card.Header>
            <Button
              floated="right"
              size="mini"
              className={style.viewBtn}
              // color="red"
              icon
              onClick={() => clickedCard(favorite)}
            >
              <Icon name="eye" />
            </Button>
            <Button
              floated="right"
              size="mini"
              className={style.delBtn}
              color="red"
              icon
              onClick={() => removeFavorite(favorite.id)}
            >
              <Icon name="trash" />
            </Button>
            <Card.Meta>
              {favorite.street} , {favorite.city}, {favorite.state}
            </Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid.Column>
  );
}
