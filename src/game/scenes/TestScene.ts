import { IMAGE_KEYS, SCENE_KEYS } from "keys";
import { actions, playerSelectors, stageSelectors } from "store";
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
    // Stages
    stageSelectors.selectAll(this.currentState).forEach((stage) => {
      if (!this.stageIds[stage.id]) {
        this.stageIds[stage.id] = true;
        this.stages.push(new StageEntity(this, stage.id));
      }
    });

    Object.keys(this.stageIds).forEach((id) => {
      if (!stageSelectors.selectById(this.currentState, id)) {
        this.stages.find((stage) => stage.id === id)?.destroy();
        delete this.stageIds[id];
        this.stages = this.stages.filter((stage) => stage.id !== id);
      }
    });

    // Players
    playerSelectors.selectAll(this.currentState).forEach((player) => {
      if (!this.playerIds[player.id]) {
        this.playerIds[player.id] = true;
        const playerEntity = new PlayerEntity(this, player.id);
        this.players.push(playerEntity);
        this.physics.add.collider(playerEntity, this.stages);
      }
    });

    Object.keys(this.playerIds).forEach((id) => {
      if (!playerSelectors.selectById(this.currentState, id)) {
        this.players.find((player) => player.id === id)?.destroy();
        delete this.playerIds[id];
        this.players = this.players.filter((player) => player.id !== id);
      }
    });
  }

  createBackground() {
    this.add.image(0, 0, IMAGE_KEYS.Background).setOrigin(0, 0);
  }
}
