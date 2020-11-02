import React from "react";
import { Input, Card } from "semantic-ui-react";

const inputWrapper = {
  marginBottom: "10px",
  zIndex: "1000",
};

export default function FilterPanel({ setSearchTerm }) {
  return (
    <div style={inputWrapper}>
      <Card fluid>
        <Input
          fluid
          placeholder="Search Name, City, State, etc"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Card>
    </div>
  );
}
