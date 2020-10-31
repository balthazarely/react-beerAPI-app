import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Axios from "axios";

export default function LocationBrewInput({
  setLocation,
  setViewport,
  triggerUserLocationGather,
}) {
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

  const locatorButtonPressed = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getAddressFrom(position.coords.latitude, position.coords.longitude);
          setViewport({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            width: "100%",
            height: "100%",
            zoom: 11,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );

      const getAddressFrom = (lat, long) => {
        Axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyDEn27GYmmHEz2tz-wNZJAfeqePlIP2_GI"
        )
          .then((response) => {
            if (response.data.error_message) {
              this.error = response.data.error_message;
              console.log(response.data.error_message);
            } else {
              setLocation({
                city: response.data.results[0].address_components[3].long_name,
                state: response.data.results[0].address_components[5].long_name,
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
    } else {
      console.log("your browser does not support GeoLocation API");
    }
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
                size="large"
                {...getInputProps({})}
              />

              {/* <Button onClick={handleSearch}>Search</Button> */}
              <Button icon size="large" onClick={locatorButtonPressed}>
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
