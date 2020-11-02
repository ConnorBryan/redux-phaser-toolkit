import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import BaseEntity from "./BaseEntity";

export default class PlayerEntity extends BaseEntity<Geodancer.Entity> {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      ENTITY_KEYS.Player,
      ENTITY_KEYS.Player as "player",
      Phaser.Math.RND.uuid()
    );
  }
}
