import React from "react";
import { Grid } from "semantic-ui-react";
import SingleBrewListItem from "./LocationBrewListItem";

const rowStyle = {
  maxHeight: "100vh",
  overflowY: "hidden",
  overflowY: "scroll",
};

export default function LocationBrewList({ brewery, handleBreweryListClick }) {
  return (
    <Grid>
      <Grid.Row style={rowStyle} columns={1}>
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
