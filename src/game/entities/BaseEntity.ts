import Phaser from "phaser";
import { EntitySelectors } from "@reduxjs/toolkit";
import { SYSTEM_KEYS } from "keys";
import { ConfiguredStore, RootState } from "store";
import { StorePlugin } from "game/plugins";

interface EntityConfig<T> {
  scene: Phaser.Scene;
  key: string;
  id: string;
  selectors?: EntitySelectors<T, RootState>;
}

export default class BaseEntity<T> extends Phaser.GameObjects.GameObject {
  kind: string;
  id: string;
  store!: ConfiguredStore;
  selectors?: EntitySelectors<T, RootState>;

  get gameState() {
    return this.store.getState();
  }

  get ownData() {
    return this.selectors?.selectById(this.gameState, this.id);
  }

  constructor({ scene, key, id, selectors }: EntityConfig<T>) {
    super(scene, key);
    const { store } = scene.plugins.get(SYSTEM_KEYS.Store) as StorePlugin;

    this.kind = key;
    this.id = id;
    this.store = store;
    this.selectors = selectors;
  }
}
