import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";

export default function SingleBrewInput({ setSearchTerm }) {
  const [term, setTerm] = useState("");

  const handleSubmit = () => {
    setSearchTerm(term);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          width={14}
          placeholder="Search Name"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Form.Button width={2} content="Search" />
      </Form.Group>
    </Form>
  );
}
