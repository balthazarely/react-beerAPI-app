import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export default function NightModeBtn({ setMapNightMode, mapNightMode }) {
  const [hover, setHover] = useState(false);

  return (
    <div>
      {mapNightMode ? (
        <Button
          onClick={() => setMapNightMode(!mapNightMode)}
          color="black"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div>
            {" "}
            <Icon name="moon" color={hover ? "blue" : "white"} />
            night
          </div>
        </Button>
      ) : (
        <Button
          onClick={() => setMapNightMode(!mapNightMode)}
          color="yellow"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div>
            {" "}
            <Icon name="sun" color={hover ? "red" : "white"} />
            day
          </div>
        </Button>
      )}
    </div>
  );
}
