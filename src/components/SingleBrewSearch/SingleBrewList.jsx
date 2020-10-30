import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import SingleBrewListItem from "./SingleBrewListItem";

export default function SingleBrewList({ brewery, handleBreweryListClick }) {
  return (
    <Grid>
      <Grid.Row columns={1}>
        {brewery &&
          brewery.map((brew) => {
            return (
              <SingleBrewListItem
                key={brew.id}
                brewery={brew}
                handleBreweryListClick={handleBreweryListClick}
              />
            );
          })}
      </Grid.Row>
    </Grid>
  );
}

/* {brewery.map((brew) => {
          return <SingleBrewListItem />;
        })}{" "} */
