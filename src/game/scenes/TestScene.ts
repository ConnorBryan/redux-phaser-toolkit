import { IMAGE_KEYS, SCENE_KEYS } from "keys";
import { actions, playerSelectors } from "store";
import { PlayerEntity, StageEntity } from "../entities";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
  stages: StageEntity[] = [];
  stageIds: Record<string, true> = {};
  players: PlayerEntity[] = [];
  playerIds: Record<string, true> = {};

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
    this.store.dispatch(actions.gameStarted());
  }

  update() {
    playerSelectors.selectAll(this.currentState).forEach((player) => {
      if (!this.playerIds[player.id]) {
        this.playerIds[player.id] = true;
        this.players.push(new PlayerEntity(this, player.id));
      }
    });
  }

  createBackground() {
    this.add.image(0, 0, IMAGE_KEYS.Background).setOrigin(0, 0);
  }
}
