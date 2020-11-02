import { createAction } from "@reduxjs/toolkit";
import { ACTION_KEYS } from "keys";

export const debugMenuUpdated = createAction(
  ACTION_KEYS.DebugMenuUpdated,
  (key: string, value: any) => ({
    payload: { key, value },
    value,
  })
);

export const gameStarted = createAction(ACTION_KEYS.GameStarted);
