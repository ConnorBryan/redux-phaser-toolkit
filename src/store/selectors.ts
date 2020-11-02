import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./create-store";

export const getSettings = (state: RootState) => state.settings;

export const getStageDimensions = createSelector(
  getSettings,
  (settings) => settings.stage
);
export const getStageWidth = createSelector(
  getStageDimensions,
  ({ width }) => width
);
export const getStageHeight = createSelector(
  getStageDimensions,
  ({ height }) => height
);
