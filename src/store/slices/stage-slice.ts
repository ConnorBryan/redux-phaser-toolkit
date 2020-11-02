import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { COLOR_KEYS, ENTITY_KEYS } from "keys";
import { gameStarted } from "store/actions";
import { RootState } from "store/create-store";

const stageAdapter = createEntityAdapter<Geodancer.Entity>();

export default createSlice({
  name: ENTITY_KEYS.Stage,
  initialState: stageAdapter.getInitialState(),
  reducers: {
    removeStage(state, action: PayloadAction<string>) {
      stageAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(gameStarted.type, (state) => {
      stageAdapter.addOne(state, {
        id: Phaser.Math.RND.uuid(),
        scale: {
          width: 600,
          height: 25,
        },
        position: {
          x: 404,
          y: 525,
        },
        color: COLOR_KEYS.Black,
      });
    }),
});

export const stageSelectors = stageAdapter.getSelectors(
  (state: RootState) => state.stage
);

export const getStage = (state: RootState, id: string) =>
  stageSelectors.selectById(state, id);

export const getMainStage = (state: RootState) => {
  const [mainStage] = stageSelectors.selectAll(state);

  return mainStage;
};

export const getMainStageWidth = (state: RootState) => {
  const stage = getMainStage(state);

  return stage ? stage.scale.width : 0;
};

export const getMainStageHeight = (state: RootState) => {
  const stage = getMainStage(state);

  return stage ? stage.scale.height : 0;
};
