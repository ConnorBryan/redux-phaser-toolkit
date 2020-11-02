import React from "react";
import { selectors } from "store";
import Panel from "./Panel";
import DebugField from "./DebugField";

export default function DebugManager() {
  return (
    <Panel title="Debug">
      <DebugField
        label="Stage Width"
        type="number"
        settingKey="stage.width"
        selector={selectors.getStageWidth}
      />
    </Panel>
  );
}
