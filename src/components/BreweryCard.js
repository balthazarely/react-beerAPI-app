import React from "react";

export default function BreweryCard(props) {
  return (
    <div>
      {props.breweryCard.name}
      <button onClick={() => props.addToFavorites(props.breweryCard)}>
        add to favorites
      </button>
    </div>
  );
}
