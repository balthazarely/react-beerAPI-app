import React, { useState, useEffect } from "react";
import Search from "./BeerMap/Search";
import LocationBrewSearchPage from "./LocationBeerSearch/LocationBrewSearchPage";
import MyFavorites from "./Favorites/MyFavorites";
import NavBar from "./Navbar";
import FilterPanel from "./Favorites/FilterPanel";
import About from "./About";
import SingleBeerPage from "./SingleBeerPage/SingleBeerPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleBrewSearchPage from "./SingleBrewSearch/SingleBrewSearchPage";

export default function MainLayout() {
  const [value, setValue] = React.useState(0);
  const [clickedCoordinates, setClickedCoordinates] = React.useState(0);
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

  const addToFavorites = (obj) => {
    console.log(obj);
    setFavorites([...favorites, obj]);
  };

  const removeFavorite = (itemId) => {
    setData(data.filter(({ id }) => id !== itemId));
    // to go back, just change setFilteredFav and filteredFav to fav, setFav
  };

  // Filter Stuff
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState();

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleFilterInput = (e) => {
    let term = e.target.value.toLowerCase();
    setSearchText(term);
    filterData(term);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(favorites);
    else {
      const filteredData = favorites.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  useEffect(() => {
    setData(favorites);
  }, [favorites]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <>
          <Route exact path="/">
            {/* <Search addToFavorites={addToFavorites} /> */}
            <LocationBrewSearchPage addToFavorites={addToFavorites} />
          </Route>
          <Route exact path="/singleBrewSearch">
            <SingleBrewSearchPage />
          </Route>
          <Route exact path="/favorites">
            {/* <FilterPanel handleFilterInput={handleFilterInput} /> */}
            <MyFavorites
              favorites={data}
              removeFavorite={removeFavorite}
              handleFilterInput={handleFilterInput}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route
            exact
            path={["/brewery/:id"]}
            component={SingleBeerPage}
          ></Route>
        </>
      </Switch>
    </Router>
  );
}
