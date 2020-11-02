import Phaser from "phaser";
import { ConfiguredStore } from "store";
import { DEBUG_MODE_ENABLED } from "config";
import { SYSTEM_KEYS } from "keys";
import { StorePlugin } from "game/plugins";

export default class BaseScene extends Phaser.Scene {
  store!: ConfiguredStore;

  init() {
    const { store } = this.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.store = store;

    // Show [x, y] coordinates on click.
    if (DEBUG_MODE_ENABLED) {
      this.input.on(Phaser.Input.Events.POINTER_DOWN, ({ x, y }) => {
        console.log({
          x,
          y,
        });
      });
    }
  }
}
