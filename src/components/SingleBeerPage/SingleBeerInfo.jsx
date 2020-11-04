import React from "react";
import { Segment, Grid, Image, Icon, Button } from "semantic-ui-react";
import { formatPhoneNumber } from "../Utility/_utility";

export default function SingleBeerInfo({ brewery }) {
  console.log(brewery);
  return (
    <Segment.Group>
      <Segment attached>
        <Grid width={16}>
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="orange" />
          </Grid.Column>
          <Grid.Column width={10}>
            {brewery.street} , {brewery.city}, {brewery.state}
          </Grid.Column>
        </Grid>
        <Grid width={16}>
          <Grid.Column width={1}>
            <Icon name="phone" size="large" color="orange" />
          </Grid.Column>
          <Grid.Column width={10}>
            {formatPhoneNumber(brewery.phone)}
          </Grid.Column>
        </Grid>
        <Grid width={16}>
          <Grid.Column width={1}>
            <Icon name="world" size="large" color="orange" />
          </Grid.Column>
          <Grid.Column width={10}>{brewery.website_url}</Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}
