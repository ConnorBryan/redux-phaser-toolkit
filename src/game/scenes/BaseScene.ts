import Phaser from "phaser";
import { ConfiguredStore } from "store";
import { SYSTEM_KEYS } from "keys";
import { StorePlugin } from "game/plugins";

export default class BaseScene extends Phaser.Scene {
  store!: ConfiguredStore;

  init() {
    const { store } = this.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.store = store;
  }
}
