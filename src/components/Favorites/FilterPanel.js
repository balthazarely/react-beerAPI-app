import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "semantic-ui-react";

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
      <Input
        fluid
        placeholder="Search Name, City, State, etc"
        onChange={props.handleFilterInput}
      />
    </div>
  );
}
