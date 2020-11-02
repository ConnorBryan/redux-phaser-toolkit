import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { COLOR_KEYS, ENTITY_KEYS } from "keys";

export default createSlice({
  name: ENTITY_KEYS.Player,
  initialState: {
    scale: {
      width: 15,
      height: 55,
    },
    position: {
      x: 404,
      y: 425,
    },
    color: COLOR_KEYS.Black,
  },
  reducers: {},
});

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
