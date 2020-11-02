import { COLOR_KEYS, IMAGE_KEYS, SCENE_KEYS } from "keys";
import { selectors } from "store";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
  stage!: Phaser.GameObjects.GameObject;

  constructor() {
    super({
      key: SCENE_KEYS.Test,
    });
  }

  preload() {
    this.load.image(IMAGE_KEYS.Background, "assets/images/bg.png");
  }

  create() {
    this.createBackground();
    this.createStage();
  }

  //

  createBackground() {
    this.add.image(0, 0, IMAGE_KEYS.Background).setOrigin(0, 0);
  }

  createStage() {
    const { width, height } = selectors.getStageDimensionsInPixels(
      this.store.getState()
    );
    const leftPadding = (this.scale.width - width) / 2;

    const stageRectangle = this.add
      .rectangle(leftPadding, 521, width, height, COLOR_KEYS.Black)
      .setOrigin(0, 0);

    this.stage = this.physics.add.existing(stageRectangle);
    (this.stage.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
  }
}
