import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyFavoriteCard from "./MyFavoriteCard";
import { Grid, Container, Card, Table } from "semantic-ui-react";
import FilterPanel from "./FilterPanel";

import MyFavoriteMap from "./MyFavoriteMap";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    align: "right",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MyFavorites(props) {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <FilterPanel handleFilterInput={props.handleFilterInput} />
          <Card fluid className={classes.paper}>
            <Table basic="very" celled collapsing>
              <Table.Body>
                {props.favorites &&
                  props.favorites.map((x) => {
                    return (
                      <MyFavoriteCard
                        favorite={x}
                        key={x.id}
                        removeFavorite={props.removeFavorite}
                        clickedCard={props.clickedCard}
                      />
                    );
                  })}
              </Table.Body>
            </Table>
          </Card>
        </Grid.Column>
        <Grid.Column width={6}>
          <Card fluid className={classes.paper}>
            <MyFavoriteMap favorites={props.favorites} />
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
