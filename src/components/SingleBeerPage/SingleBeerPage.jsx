import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import SingleBeerPageHeader from "./SingleBeerPageHeader";
import Axios from "axios";

export default function SingleBeerPage({ match }) {
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    let url = `https://api.openbrewerydb.org/breweries/${match.params.id}`;
    Axios.get(url).then((res) => {
      console.log(res.data);
      setBrewery(res.data);
    });
  }, []);

  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          <SingleBeerPageHeader brewery={brewery} />
          {/* <EventDetailedInfo event={event} /> */}
          {/* <EventDetailedChat /> */}
        </Grid.Column>
        <Grid.Column width={6}>
          {/* <EventDetailedSidebar attendees={event.attendees} /> */}
        </Grid.Column>
      </Grid>
    </Container>
  );
}
