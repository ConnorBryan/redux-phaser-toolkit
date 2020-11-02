declare namespace Geodancer {
  type SettingsSetter = {
    path: string | string[];
    value: any;
  };

  interface Entity {
    name: string;
    lives: number;
  }
}
