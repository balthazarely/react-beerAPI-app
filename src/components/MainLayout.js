import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import ResultsContainer from "./ResultsContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  // const [brewery, setBrewery] = useState([]);
  // const [clickedBrewery, setCickedBrewery] = useState({});

  // const getBreweryData = (data) => {
  //   setBrewery(data);
  // };

  // const getClickedBrewery = (data) => {
  //   setCickedBrewery(data);
  // };

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}> */}
      <Search />
      {/* </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <ResultsContainer
              brewery={brewery}
              getClickedBrewery={getClickedBrewery}
            />
          </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}
