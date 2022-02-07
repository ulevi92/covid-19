import { LoadingProviderState } from "./LoadingProvider";

export enum LoadingActionType {
  SET_LOADING_TRUE = "[loading] SET_LOADING_TRUE",
  SET_LOADING_FALSE = "[loading] SET_LOADING_FALSE",
}

export type LoadingReducerType =
  | {
      type: LoadingActionType.SET_LOADING_TRUE;
      payload: true;
    }
  | {
      type: LoadingActionType.SET_LOADING_FALSE;
      payload: false;
    };

export const LoadingReducer = (
  state: LoadingProviderState,
  action: LoadingReducerType
) => {
  switch (action.type) {
    case LoadingActionType.SET_LOADING_TRUE:
      return {
        loading: action.payload,
      };

    case LoadingActionType.SET_LOADING_FALSE:
      return {
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
