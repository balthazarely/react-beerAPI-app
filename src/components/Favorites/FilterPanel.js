import React from "react";
import { Input } from "semantic-ui-react";

export default function FilterPanel({ setSearchTerm }) {
  return (
    <div>
      <Input
        fluid
        placeholder="Search Name, City, State, etc"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
