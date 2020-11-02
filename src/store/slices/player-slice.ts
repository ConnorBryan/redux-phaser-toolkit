import Phaser from "phaser";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { gameStarted } from "../actions";
import { RootState } from "../create-store";
import { COLOR_KEYS, ENTITY_KEYS } from "keys";
import { INITIAL_PLAYER_EXTRA_LIVES, PLAYER_SPEED } from "config";

const playerAdapter = createEntityAdapter<Geodancer.Player>();

export default createSlice({
  name: ENTITY_KEYS.Player,
  initialState: playerAdapter.getInitialState(),
  reducers: {
    removePlayer(state, action: PayloadAction<string>) {
      playerAdapter.removeOne(state, action.payload);
    },
    playerMoved(state, action: PayloadAction<Geodancer.Actions.PlayerMoved>) {
      const { id, direction } = action.payload;
      const player = state.entities[id]!;
      const newVelocityX = direction === "left" ? -PLAYER_SPEED : PLAYER_SPEED;

      player.movement = {
        direction,
        velocity: {
          x: newVelocityX,
          y: 0,
        },
      };
    },
    playerStopped(state, action: PayloadAction<string>) {
      const player = state.entities[action.payload]!;

      player.movement = {
        direction: null,
        velocity: {
          x: 0,
          y: 0,
        },
      };
    },
  },
  extraReducers: (builder) =>
    builder.addCase(gameStarted.type, (state) => {
      playerAdapter.addOne(state, {
        id: Phaser.Math.RND.uuid(),
        lives: INITIAL_PLAYER_EXTRA_LIVES,
        scale: {
          width: 15,
          height: 55,
        },
        position: {
          x: 404,
          y: 425,
        },
        movement: {
          direction: null,
          velocity: {
            x: 0,
            y: 0,
          },
        },
        color: COLOR_KEYS.Black,
      });
    }),
});

export const playerSelectors = playerAdapter.getSelectors(
  (state: RootState) => state.player
);

export const getPlayer = (state: RootState, id: string) =>
  playerSelectors.selectById(state, id);
