import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

export default function RadioToggle({ setSearchByCity }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setSearchByCity(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <div style={{ marginTop: "7px" }}>
      <Checkbox onChange={handleCheck} label="Search by Name" />
    </div>
  );
}
