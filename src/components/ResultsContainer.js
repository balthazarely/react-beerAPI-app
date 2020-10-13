import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsContainer(props) {
  return (
    <div style={{ height: "500px", overflow: "hidden", overflowY: "scroll" }}>
      {props.brewery.map((brew) => {
        return <ResultCard brew={brew} getClickedCard={props.getClickedCard} />;
      })}
    </div>
  );
}
