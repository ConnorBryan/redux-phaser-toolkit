/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Geodancer {
  type Settings = {
    playerSpeed: number;
  };

  type Direction = "left" | "right";

  interface Entity {
    id: string;
    color: number;
    scale: {
      width: number;
      height: number;
    };
    position: {
      x: number;
      y: number;
    };
  }

  interface Player extends Entity {
    lives: number;
    movement: {
      direction: null | Direction;
      speed: number;
      velocity: {
        x: number;
        y: number;
      };
    };
  }

  namespace Actions {
    type DebugMenuChanged = { key: keyof Geodancer.Settings; value: any };

    type PlayerMoved = {
      id: string;
      direction: Direction;
    };
  }
}
