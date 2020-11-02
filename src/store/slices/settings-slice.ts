import set from "lodash.set";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REDUCER_KEYS } from "keys";
import { debugMenuUpdated } from "../actions";

export default createSlice({
  name: REDUCER_KEYS.Settings,
  initialState: {},
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      debugMenuUpdated.type,
      (state, action: PayloadAction<Geodancer.SettingsSetter>) =>
        set(state, action.payload.path, action.payload.value)
    ),
});
