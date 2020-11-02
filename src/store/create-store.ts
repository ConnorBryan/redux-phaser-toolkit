import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { playerSlice, settingsSlice, stageSlice } from "./slices";

function createStore() {
  return configureStore({
    reducer: combineReducers({
      player: playerSlice.reducer,
      settings: settingsSlice.reducer,
      stage: stageSlice.reducer,
    }),
  });
}

const exampleStore = createStore();

export type ConfiguredStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof exampleStore.getState>;

export default createStore;
