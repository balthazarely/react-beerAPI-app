import React from "react";
import MyFavoriteCard from "./MyFavoriteCard";
import { Grid, Container, Card, Table } from "semantic-ui-react";
import FilterPanel from "./FilterPanel";

import MyFavoriteMap from "./MyFavoriteMap";

export default function MyFavorites(props) {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <FilterPanel handleFilterInput={props.handleFilterInput} />
          <Card fluid>
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
          <Card fluid>
            <MyFavoriteMap favorites={props.favorites} />
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
