import React from "react";
import ResultCard from "./ResultCard";
import { Card, Icon, Image, Table } from "semantic-ui-react";

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
  return (
    <div style={{ height: "500px", overflow: "hidden", overflowY: "scroll" }}>
      {renderAuthButton()}

      <Table basic="very" fixed celled collapsing padded>
        <Table.Body>
          {props.brewery.map((brew) => {
            return (
              <ResultCard
                brew={brew}
                getClickedCard={props.getClickedCard}
                id={brew.id}
                key={brew.id}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
