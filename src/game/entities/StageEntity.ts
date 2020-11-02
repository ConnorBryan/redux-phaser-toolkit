import Phaser from "phaser";
import { COLOR_KEYS, ENTITY_KEYS } from "keys";
import { selectors } from "store";
import BaseEntity from "./BaseEntity";

export default class StageEntity extends BaseEntity<Geodancer.Entity> {
  constructor(scene: Phaser.Scene) {
    super({
      scene,
      key: ENTITY_KEYS.Stage,
      id: "b",
    });

    const { width, height } = selectors.getStageScale(this.store.getState());
    const leftPadding = (this.scene.scale.width - width) / 2;
    const rectangle = this.scene.add
      .rectangle(leftPadding, 521, width, height, COLOR_KEYS.Black)
      .setOrigin(0, 0);

    this.scene.physics.add.existing(rectangle);

    this.body = rectangle.body as Phaser.Physics.Arcade.Body;
    this.body.setAllowGravity(false).setImmovable(true);
  }
}
