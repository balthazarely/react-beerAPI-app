import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "semantic-ui-react";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FilterPanel(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <Input
        fluid
        placeholder="Search Name, City, State, etc"
        onChange={props.handleFilterInput}
      />
      {/* <TextField
          // id="standard-basic"
          label="Search Name, City, State, etc"
          onChange={props.handleFilterInput}
        />
      </form> */}
    </div>
  );
}
