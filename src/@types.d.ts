/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Geodancer {
  type SettingsSetter = {
    path: string | string[];
    value: any;
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
      velocity: {
        x: number;
        y: number;
      };
    };
  }

  namespace Actions {
    type PlayerMoved = {
      id: string;
      direction: Direction;
    };
  }
}
