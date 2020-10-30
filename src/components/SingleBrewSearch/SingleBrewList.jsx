import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import SingleBrewListItem from "./SingleBrewListItem";

export default function SingleBrewList({ brewery }) {
  console.log(brewery);
  return (
    <Grid>
      <Grid.Row columns={1}>
        {brewery.map((brew) => {
          return <SingleBrewListItem />;
        })}
      </Grid.Row>
    </Grid>
  );
}

/* {brewery.map((brew) => {
          return <SingleBrewListItem />;
        })}{" "} */
