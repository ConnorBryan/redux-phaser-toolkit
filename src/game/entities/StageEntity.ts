import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import { stageSelectors } from "store";
import BaseEntity from "./BaseEntity";

export default class StageEntity extends BaseEntity<Geodancer.Entity> {
  rectangle!: Phaser.GameObjects.GameObject;

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
    } = stageSelectors.selectById(this.gameState, id)!;
    const leftPadding = (this.scene.scale.width - width) / 2;

    this.rectangle = this.scene.add
      .rectangle(leftPadding, y, width, height, color)
      .setOrigin(0, 0);

    this.scene.physics.add.existing(this.rectangle);

    this.body = this.rectangle.body as Phaser.Physics.Arcade.Body;
    this.body.setAllowGravity(false).setImmovable(true);
  }

  destroy() {
    super.destroy();
    this.rectangle.destroy();
  }
}
