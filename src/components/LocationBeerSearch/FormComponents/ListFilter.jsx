import React from "react";
import { Card, Form, Radio } from "semantic-ui-react";
import style from "./ListFilter.module.css";

export default function ListFilter({ setBreweryType, breweryType }) {
  return (
    <Card fluid>
      <Card.Content>
        <Form>
          <Form.Field
            control={Radio}
            label="All"
            checked={breweryType === "All"}
            value="All"
            onClick={() => setBreweryType("All")}
          />
          <Form.Field
            control={Radio}
            label="Mirco"
            checked={breweryType === "Mirco"}
            value="Mirco"
            onClick={() => setBreweryType("Mirco")}
          />
          <Form.Field
            control={Radio}
            label="Brew Pub"
            checked={breweryType === "Brew Pub"}
            value="Brew Pub"
            onClick={() => setBreweryType("Brew Pub")}
          />
          <Form.Field
            control={Radio}
            label="Large"
            checked={breweryType === "Large"}
            value="Large"
            onClick={() => setBreweryType("Large")}
          />
        </Form>
      </Card.Content>
    </Card>
  );
}
