import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function LocationBrewInput({ setLocation, setViewport }) {
  const [address, setAddress] = useState("");
  // const [tempCoordinates, setTempCoordinates] = useState({});
  // const [location, setLocation] = useState({ city: "", state: "" });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const location = {
      city: results[0].address_components[0].long_name,
      state: results[0].address_components[2].long_name,
    };
    let newViewport = {
      latitude: latLng.lat,
      longitude: latLng.lng,
      width: "100%",
      height: "100%",
      zoom: 11,
    };
    setAddress(value);
    setLocation(location);
    setViewport(newViewport);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{ types: ["(cities)"] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div>
              <Input
                variant="outlined"
                placeholder="search city"
                size="small"
                {...getInputProps({})}
              />

              {/* <Button onClick={handleSearch}>Search</Button> */}
              <Button icon>
                <Icon name="world" />
              </Button>

              <div id="error"></div>
            </div>
            <div>
              {suggestions.map((suggestion, i) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };
                return (
                  <div
                    style={{
                      backgroundColor: "white",
                      position: "absolute",
                      top: "0px",
                      zIndex: "100",
                      margin: "10px",
                      padding: "10px",
                    }}
                    key={i}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
