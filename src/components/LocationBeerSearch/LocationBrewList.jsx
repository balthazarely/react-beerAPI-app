import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import SingleBrewListItem from "./LocationBrewListItem";

export default function LocationBrewList({ brewery, handleBreweryListClick }) {
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
