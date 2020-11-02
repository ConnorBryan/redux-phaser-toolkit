import { createSlice } from "@reduxjs/toolkit";
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
