import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import BaseEntity from "./BaseEntity";

export default class StageEntity extends BaseEntity<Geodancer.Entity> {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      ENTITY_KEYS.Stage,
      ENTITY_KEYS.Stage as "stage",
      Phaser.Math.RND.uuid()
    );
  }
}
