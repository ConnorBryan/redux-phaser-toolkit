import Phaser from "phaser";
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  DEBUG_MODE_ENABLED,
  GRAVITY,
} from "config";
import { SYSTEM_KEYS } from "keys";
import { ConfiguredStore } from "store";
import { StorePlugin } from "./plugins";
import { TestScene } from "./scenes";

export default function loadGame(parent: HTMLElement, store: ConfiguredStore) {
  return new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: GRAVITY },
        debug: DEBUG_MODE_ENABLED,
      },
    },
    scene: [TestScene],
    plugins: {
      global: [
        {
          key: SYSTEM_KEYS.Store,
          start: true,
          plugin: StorePlugin,
          data: store,
        },
      ],
    },
  });
}
