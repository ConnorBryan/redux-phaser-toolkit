import { ConfiguredStore } from "store";

export default class StorePlugin extends Phaser.Plugins.BasePlugin {
  store!: ConfiguredStore;
  selectors!: Record<string, Function>;

  init(store: ConfiguredStore) {
    this.store = store;
  }
}
