import { IMAGE_KEYS, SCENE_KEYS } from "keys";
import { actions, playerSelectors, stageSelectors } from "store";
import { PlayerEntity, StageEntity } from "../entities";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  stages: StageEntity[] = [];
  stageIds: Record<string, true> = {};
  players: PlayerEntity[] = [];
  playerIds: Record<string, true> = {};
  playerOne!: PlayerEntity;

  constructor() {
    super({
      key: SCENE_KEYS.Test,
    });
  }

  preload() {
    this.load.image(IMAGE_KEYS.Background, "assets/images/bg.png");
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.createBackground();
    this.store.dispatch(actions.gameStarted());

    // Add new stages.
    stageSelectors.selectAll(this.currentState).forEach((stage) => {
      if (!this.stageIds[stage.id]) {
        this.stageIds[stage.id] = true;
        const stageEntity = new StageEntity(this, stage.id);
        this.stages.push(stageEntity);
        this.physics.add.collider(stageEntity, this.players);
      }
    });

    // Add new players.
    playerSelectors.selectAll(this.currentState).forEach((player) => {
      if (!this.playerIds[player.id]) {
        this.playerIds[player.id] = true;
        const playerEntity = new PlayerEntity(this, player.id);
        this.players.push(playerEntity);
        this.physics.add.collider(playerEntity, this.stages);
      }
    });

    this.playerOne = this.players[0];
  }

  update() {
    // Remove outdated stages.
    Object.keys(this.stageIds).forEach((id) => {
      if (!stageSelectors.selectById(this.currentState, id)) {
        this.stages.find((stage) => stage.id === id)?.destroy();
        delete this.stageIds[id];
        this.stages = this.stages.filter((stage) => stage.id !== id);
      }
    });

    // Update existing stages.
    this.stages.forEach((stage) => stage.update());

    // Remove outdated players.
    Object.keys(this.playerIds).forEach((id) => {
      if (!playerSelectors.selectById(this.currentState, id)) {
        this.players.find((player) => player.id === id)?.destroy();
        delete this.playerIds[id];
        this.players = this.players.filter((player) => player.id !== id);
      }
    });

    // Update existing players.
    this.players.forEach((player) => player.update());

    this.listenForInput();
  }

  createBackground() {
    this.add.image(0, 0, IMAGE_KEYS.Background).setOrigin(0, 0);
  }

  listenForInput() {
    const { left, right } = this.cursors;

    if (left?.isDown) {
      this.playerOne.move("left");
    } else if (right?.isDown) {
      this.playerOne.move("right");
    } else {
      this.playerOne.stop();
    }
  }
}
