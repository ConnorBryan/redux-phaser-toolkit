export const DEBUG_ENABLED = false;

export const SYSTEM_KEYS = {
  Store: "store",
};

export const SCENE_KEYS = {
  Battle: "battle",
};

export const ENTITY_KEYS = {
  Player: "player",
};

export const EVENT_KEYS = {
  BattleStarted: "battleStarted",
  DebugMenuUpdated: "debugMenuUpdated",
};

export const WEAPON_KEYS = {
  Laser: "laser",
};

export const PADDLE_CONDITION_KEYS: Record<
  Phlaser.Paddle.Condition,
  Phlaser.Paddle.Condition
> = {
  Full: "Full",
  ThreeQuarters: "ThreeQuarters",
  Half: "Half",
  OneQuarter: "OneQuarter",
  One: "One",
  Dead: "Dead",
};

export const COLOR_KEYS = {
  Blue: 0x0000ff,
  White: 0xffffff,
  Black: 0x000000,
};
