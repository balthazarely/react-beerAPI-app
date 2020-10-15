import React, {useState, useEffect} from "react";
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
import FilterPanel from './FilterPanel'
import About from './About'



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
    {
      brewery_type: "micro",
      city: "Denver",
      country: "United States",
      id: 1516,
      latitude: "39.7615104",
      longitude: "-104.9812181",
      name: "Ratio Beerworks",
      phone: "3102669264",
      postal_code: "80205-2309",
      state: "Colorado",
      street: "2920 Larimer St",
      updated_at: "2018-08-24T00:24:20.330Z",
      website_url: "http://ratiobeerworks.com",
    },
    {
      brewery_type: "large",
      city: "Denver",
      country: "United States",
      id: 1239,
      latitude: "39.7735561",
      longitude: "-104.9769417",
      name: "Blue Moon Brewery",
      phone: "",
      postal_code: "80216-3632",
      state: "Colorado",
      street: "3750 Chestnut Pl",
      updated_at: "2018-08-24T00:05:51.775Z",
      website_url: "",
    },
    {
      brewery_type: "micro",
      city: "Bellingham",
      country: "United States",
      id: 7558,
      latitude: "48.7635508571429",
      longitude: "-122.486221142857",
      name: "Menace Brewing",
      phone: "3605954059",
      postal_code: "98225-2406",
      state: "Washington",
      street: "2529 Meridian St",
      updated_at: "2018-08-24T16:36:51.570Z",
      website_url: "",
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addToFavorites = (obj) => {
    console.log(obj);
    setFavorites([...favorites, obj]);
  };

  const removeFavorite = (itemId) => {
    console.log(itemId);
    console.log("whats good");
    setfilteredFavorites(filteredFavorites.filter(({ id }) => id !== itemId));
    // to go back, just change setFilteredFav and filteredFav to fav, setFav
  };

  // Filter Stuff
    const [serachTerm, setSerachTerm] = useState('')
    const [filteredFavorites, setfilteredFavorites ] = useState([])

    const handleFilterInput = (e) => {
        let value = e.target.value.toLowerCase()
        setSerachTerm(value)
    }

    const filterByName = () => {
      let filtered =  favorites.filter(brew => {
       return brew.name.toLowerCase().includes(serachTerm)

      })
      return filtered
    }

    useEffect(() => {
      console.log("Effect is here");
          setfilteredFavorites(filterByName)
          console.log(filterByName);
    }, [serachTerm, favorites])


 

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
        <FilterPanel handleFilterInput={handleFilterInput} />
        <MyFavorites favorites={filteredFavorites} removeFavorite={removeFavorite} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About />
        
      </TabPanel>
    </div>
  );
}
