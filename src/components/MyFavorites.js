import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyFavoriteCard from "./MyFavoriteCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            {props.favorites.map((x) => {
              return (
                <MyFavoriteCard
                  favorite={x}
                  key={x.id}
                  removeFavorite={props.removeFavorite}
                  clickedCard={props.clickedCard}
                />
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <MyFavoriteMap favorites={props.favorites}  />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
