import * as settings from "./slices/settings-slice";
import * as stage from "./slices/stage-slice";

const { default: settingsSlice, ...settingsSelectors } = settings;
const { default: stageSlice, ...stageSelectors } = stage;

export default {
  ...settingsSelectors,
  ...stageSelectors,
};
