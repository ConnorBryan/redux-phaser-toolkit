import { IMAGE_KEYS, SCENE_KEYS } from "keys";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
  constructor() {
    super({
      key: SCENE_KEYS.Test,
    });
  }

  preload() {
    this.load.image(IMAGE_KEYS.Background, "assets/images/bg.png");
  }

  create() {
    this.showBackground();
  }

  //

  showBackground() {
    this.add.image(0, 0, IMAGE_KEYS.Background).setOrigin(0, 0);
  }
}
