import React, { useState, useEffect } from "react";
import SingelBrewInput from "./SingleBrewInput";
import SingleBrewList from "./SingleBrewList";
import SingleBrewMap from "./SingleBrewMap";
import { Container, Grid } from "semantic-ui-react";
import Axios from "axios";

export default function SingleBrewSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brewery, setBewery] = useState([]);

  const handleSearch = () => {
    let url = `https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`;
    Axios.get(url).then((res) => {
      setBewery(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <Container>
      <SingelBrewInput setSearchTerm={setSearchTerm} />
      <Grid stackable columns={2}>
        <Grid.Column>
          <SingleBrewList brewery={brewery} />
        </Grid.Column>
        <Grid.Column>
          <SingleBrewMap brewery={brewery} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
