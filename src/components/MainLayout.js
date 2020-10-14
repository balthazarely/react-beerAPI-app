import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Search from "./Search";
import MyFavorites from "./MyFavorites";

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainLayout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [favorites, setFavorites] = React.useState([
    {
      brewery_type: "micro",
      city: "Wasilla",
      country: "United States",
      id: 55,
      latitude: "61.5752695",
      longitude: "-149.4127103",
      name: "Bearpaw River Brewing Co",
      phone: "",
      postal_code: "99654-7679",
      state: "Alaska",
      street: "4605 E Palmer Wasilla Hwy",
      updated_at: "2018-08-23T23:20:40.743Z",
      website_url: "http://bearpawriverbrewing.com",
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addToFavorites = (obj) => {
    console.log(obj);
    setFavorites([...favorites, obj]);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Beer Map" {...a11yProps(0)} />
          <Tab label="Favorites" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Search addToFavorites={addToFavorites} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyFavorites favorites={favorites} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
