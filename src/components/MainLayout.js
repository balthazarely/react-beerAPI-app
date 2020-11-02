import React, { useState, useEffect } from "react";
import LocationBrewSearchPage from "./LocationBeerSearch/LocationBrewSearchPage";
import MyFavoritesPage from "./Favorites/MyFavoritesPage";
import NavBar from "./Navbar";
import SingleBeerPage from "./SingleBeerPage/SingleBeerPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { filterExcludeColumns } from "./Utility/_filterExcludeColumns";
import { data } from "./API/Data";

export default function MainLayout() {
  const [favorites, setFavorites] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  // Basic CRUD Stuff
  const addToFavorites = (obj) => {
    console.log(obj);
    setFavorites([...favorites, obj]);
  };

  const removeFavorite = (itemId) => {
    setFavorites(favorites.filter(({ id }) => id !== itemId));
  };

  // Filter Section
  function filterByValue(array) {
    return array.filter((o) =>
      Object.keys(o).some((k) =>
        filterExcludeColumns.includes(k)
          ? false
          : o[k].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <>
          <Route exact path="/">
            <LocationBrewSearchPage addToFavorites={addToFavorites} />
          </Route>
          <Route exact path="/favorites">
            <MyFavoritesPage
              setSearchTerm={setSearchTerm}
              favorites={filterByValue(favorites)}
              removeFavorite={removeFavorite}
            />
          </Route>
          <Route exact path="/about"></Route>
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
