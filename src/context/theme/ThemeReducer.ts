import { ThemeProviderState } from "./ThemeProviderCtx";

export enum ThemeActionType {
  SET_LIGHT = "[theme] SET_LIGHT",
  SET_DARK = "[theme] SET_DARK",
}

export type ThemeReducerType =
  | {
      type: ThemeActionType.SET_LIGHT;
      payload: true;
    }
  | { type: ThemeActionType.SET_DARK; payload: false };

export const themeReducer = (
  state: ThemeProviderState,
  action: ThemeReducerType
) => {
  switch (action.type) {
    case ThemeActionType.SET_LIGHT:
      return {
        ...state,
        lightMode: action.payload,
      };

    case ThemeActionType.SET_DARK:
      return {
        ...state,
        lightMode: action.payload,
      };

    default:
      return state;
  }
};
