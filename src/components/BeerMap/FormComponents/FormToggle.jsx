import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";

export default function RadioExampleRadioGroup({ setSearchByCityOrName }) {
  const [value, setValue] = useState("city");

  const handleSearchCityOrName = (event, { value }) => {
    setValue(value);
    setSearchByCityOrName(value);
  };

  return (
    <Form>
      <Form.Field>
        <Radio
          label="Search by City"
          name="radioGroup"
          value="city"
          checked={value === "city"}
          onChange={handleSearchCityOrName}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Search by Name"
          name="radioGroup"
          value="name"
          checked={value === "name"}
          onChange={handleSearchCityOrName}
        />
      </Form.Field>
    </Form>
  );
}
