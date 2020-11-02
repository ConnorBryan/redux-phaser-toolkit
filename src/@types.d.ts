/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Geodancer {
  type SettingsSetter = {
    path: string | string[];
    value: any;
  };

  interface Entity {
    id: string;
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
    color: number;
  }
}
