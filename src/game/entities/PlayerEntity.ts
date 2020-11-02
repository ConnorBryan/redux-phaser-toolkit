import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import BaseEntity from "./BaseEntity";
import { playerSelectors } from "store";

export default class PlayerEntity extends BaseEntity<Geodancer.Entity> {
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
    } = playerSelectors.selectById(this.store.getState(), id)!;

    const rectangle = this.scene.add.rectangle(x, y, width, height, color);

    this.scene.physics.add.existing(rectangle);

    this.body = rectangle.body as Phaser.Physics.Arcade.Body;
  }
}
