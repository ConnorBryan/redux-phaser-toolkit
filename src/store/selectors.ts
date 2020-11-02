import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./create-store";

export const getSettings = (state: RootState) => state.settings;

export const getPlayerSpeed = createSelector(
  getSettings,
  (settings) => settings.playerSpeed
);
