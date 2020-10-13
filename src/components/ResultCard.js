import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

export default function ResultCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const convertToNum = (string) => {
    let number = parseFloat(string);
    let rounded = number;
    return parseFloat(rounded);
  };

  return (
    <Card
      className={classes.root}
      variant="outlined"
      onClick={() =>
        props.getClickedCard({
          lat: convertToNum(props.brew.latitude),
          lng: convertToNum(props.brew.longitude),
        })
      }
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="h2">
            {props.brew.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.brew.brewery_type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
