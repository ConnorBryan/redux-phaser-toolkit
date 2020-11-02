import set from "lodash.set";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_PLAYER_SPEED } from "config";
import { REDUCER_KEYS } from "keys";
import { debugMenuUpdated } from "../actions";

export default createSlice({
  name: REDUCER_KEYS.Settings,
  initialState: {
    playerSpeed: INITIAL_PLAYER_SPEED,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      debugMenuUpdated.type,
      (state, action: PayloadAction<Geodancer.Actions.DebugMenuChanged>) =>
        set(state, action.payload.key, action.payload.value)
    ),
});
