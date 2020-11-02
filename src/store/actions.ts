import { createAction } from "@reduxjs/toolkit";
import { ACTION_KEYS } from "keys";

export const debugMenuUpdated = createAction(
  ACTION_KEYS.DebugMenuUpdated,
  (path: string, value: any) => ({
    payload: { path, value },
    value,
  })
);

export const gameStarted = createAction(ACTION_KEYS.GameStarted);
