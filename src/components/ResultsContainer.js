import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsContainer(props) {
  const renderAuthButton = () => {
    const brewLength = props.brewery.length;
    if (brewLength > 0) {
      return;
    } else {
      return (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Brewery Results
        </div>
      );
    }
  };
  console.log(props.brewery.length);
  return (
    <div style={{ height: "500px", overflow: "hidden", overflowY: "scroll" }}>
      {renderAuthButton()}

      {props.brewery.map((brew) => {
        return <ResultCard brew={brew} getClickedCard={props.getClickedCard} />;
      })}
    </div>
  );
}
