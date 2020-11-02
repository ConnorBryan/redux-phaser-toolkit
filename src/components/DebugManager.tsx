import React from "react";
import { selectors } from "store";
import Panel from "./Panel";
import DebugField from "./DebugField";

export default function DebugManager() {
  return (
    <Panel title="Debug">
      <DebugField
        label="Player Speed"
        settingKey="playerSpeed"
        type="number"
        selector={selectors.getPlayerSpeed}
      />
      <button
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 25,
        }}
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </Panel>
  );
}
