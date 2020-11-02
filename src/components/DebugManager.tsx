import React from "react";
import { getMainStageWidth, getMainStageHeight } from "store";
import Panel from "./Panel";
import DebugField from "./DebugField";

export default function DebugManager() {
  return (
    <Panel title="Debug">
      <DebugField
        label="Stage Width"
        type="number"
        settingKey="stage.width"
        selector={getMainStageWidth as any}
        min="0"
        max="1"
        step="0.1"
      />
      <DebugField
        label="Stage Height"
        type="number"
        settingKey="stage.height"
        selector={getMainStageHeight as any}
        min="0"
        max="1"
        step="0.1"
      />
    </Panel>
  );
}
