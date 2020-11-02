import * as player from "./slices/player-slice";
import * as settings from "./slices/settings-slice";
import * as stage from "./slices/stage-slice";

const { default: playerSlice, ...playerSelectors } = player;
const { default: settingsSlice, ...settingsSelectors } = settings;
const { default: stageSlice, ...stageSelectors } = stage;

export default {
  ...playerSelectors,
  ...settingsSelectors,
  ...stageSelectors,
};
