import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function NightModeBtn({ setMapNightMode, mapNightMode }) {
  return (
    <div>
      <Button onClick={() => setMapNightMode(!mapNightMode)}>
        {mapNightMode ? (
          <div>
            {" "}
            <Icon name="moon" />
            night
          </div>
        ) : (
          <div>
            {" "}
            <Icon name="sun" />
            day
          </div>
        )}
      </Button>
    </div>
  );
}
