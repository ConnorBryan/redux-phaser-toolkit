import Phaser from "phaser";
import { ENTITY_KEYS } from "keys";
import BaseEntity from "./BaseEntity";
import { playerSelectors, playerSlice } from "store";

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
    } = this.getState();

    this.rectangle = this.scene.add.rectangle(x, y, width, height, color);

    this.scene.physics.add.existing(this.rectangle);

    this.body = this.rectangle.body as Phaser.Physics.Arcade.Body;
  }

  getState() {
    return playerSelectors.selectById(this.gameState, this.id)!;
  }

  getBody() {
    return this.rectangle.body as Phaser.Physics.Arcade.Body;
  }

  update() {
    const {
      movement: {
        velocity: { x: stateVelocityX },
      },
    } = this.getState();
    const {
      velocity: { x: bodyVelocityX },
    } = this.getBody();

    if (stateVelocityX !== bodyVelocityX) {
      this.getBody().setVelocityX(stateVelocityX);
    }
  }

  destroy() {
    super.destroy();
    this.rectangle.destroy();
  }

  //

  move(direction: Geodancer.Direction) {
    const {
      movement: {
        direction: movementDirection,
        velocity: { x: stateVelocityX },
      },
    } = this.getState();

    if (stateVelocityX === 0 || movementDirection !== direction) {
      this.store.dispatch(
        playerSlice.actions.playerMoved({
          id: this.id,
          direction,
        })
      );
    }
  }

  stop() {
    const { movement } = this.getState();

    if (movement.direction) {
      this.store.dispatch(playerSlice.actions.playerStopped(this.id));
    }
  }
}
