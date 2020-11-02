import { createSelector } from "@reduxjs/toolkit";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "config";
import { RootState } from "./create-store";

// #region Settings
export const getSettings = (state: RootState) => state.settings;

export const getStageDimensions = createSelector(
  getSettings,
  (settings) => settings.stage
);
export const getStageDimensionsInPixels = createSelector(
  getStageDimensions,
  (dimensions) => {
    return {
      width: Math.floor(dimensions.width * CANVAS_WIDTH),
      height: Math.floor(dimensions.height * CANVAS_HEIGHT),
    };
  }
);

export const getStageWidth = createSelector(
  getStageDimensions,
  ({ width }) => width
);
export const getStageHeight = createSelector(
  getStageDimensions,
  ({ height }) => height
);
// #endregion

// #region Player
export const getPlayer = (state: RootState) => state.player;

export const getPlayerScale = createSelector(
  getPlayer,
  (player) => player.scale
);

export const getPlayerPosition = createSelector(
  getPlayer,
  (player) => player.position
);

export const getPlayerColor = createSelector(
  getPlayer,
  (player) => player.color
);
// #endregion
