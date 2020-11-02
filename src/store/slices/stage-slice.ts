import { createSelector, createSlice } from "@reduxjs/toolkit";
import { COLOR_KEYS, ENTITY_KEYS } from "keys";
import { RootState } from "store/create-store";

export default createSlice({
  name: ENTITY_KEYS.Stage,
  initialState: {
    scale: {
      width: 600,
      height: 25,
    },
    position: {
      x: 404,
      y: 425,
    },
    color: COLOR_KEYS.Black,
  },
  reducers: {},
});

export const getStage = (state: RootState) => state.stage;

export const getStageScale = createSelector(getStage, (stage) => stage.scale);

export const getStageWidth = createSelector(
  getStageScale,
  ({ width }) => width
);

export const getStageHeight = createSelector(
  getStageScale,
  ({ height }) => height
);
