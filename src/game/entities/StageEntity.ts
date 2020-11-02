import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import { stageSelectors } from "store";
import BaseEntity from "./BaseEntity";

export default class StageEntity extends BaseEntity<Geodancer.Entity> {
  constructor(scene: Phaser.Scene, id: string) {
    super({
      scene,
      key: ENTITY_KEYS.Stage,
      id,
      selectors: stageSelectors,
    });

    const {
      scale: { width, height },
      position: { y },
      color,
    } = stageSelectors.selectById(this.store.getState(), id)!;

    const leftPadding = (this.scene.scale.width - width) / 2;
    const rectangle = this.scene.add
      .rectangle(leftPadding, y, width, height, color)
      .setOrigin(0, 0);

    this.scene.physics.add.existing(rectangle);

    this.body = rectangle.body as Phaser.Physics.Arcade.Body;
    this.body.setAllowGravity(false).setImmovable(true);
  }
}
