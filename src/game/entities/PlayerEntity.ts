import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import BaseEntity from "./BaseEntity";
import { playerSelectors } from "store";

export default class PlayerEntity extends BaseEntity<Geodancer.Entity> {
  rectangle!: Phaser.GameObjects.GameObject;

  constructor(scene: Phaser.Scene, id: string) {
    super({
      scene,
      key: ENTITY_KEYS.Player,
      id,
      selectors: playerSelectors,
    });

    const {
      scale: { width, height },
      position: { x, y },
      color,
    } = playerSelectors.selectById(this.gameState, id)!;

    this.rectangle = this.scene.add.rectangle(x, y, width, height, color);

    this.scene.physics.add.existing(this.rectangle);

    this.body = this.rectangle.body as Phaser.Physics.Arcade.Body;
  }

  destroy() {
    super.destroy();
    this.rectangle.destroy();
  }
}
