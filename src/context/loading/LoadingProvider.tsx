import { createContext, FC, useContext, useReducer } from "react";
import { LoadingActionType, LoadingReducer } from "./LoadingReducer";

export interface LoadingProviderState {
  loading: boolean;
}

interface ContextProps extends LoadingProviderState {
  setLoading: (condition: boolean) => void;
}

const Context = createContext<ContextProps | null>(null);

export const LoadingContext = () => {
  const ctx = useContext(Context);

  if (!ctx)
    throw new Error("LoadingContext must be used inside LoadingProvider");

  return ctx;
};

const LoadingProvider: FC = ({ children }) => {
  const initialState: LoadingProviderState = {
    loading: true,
  };

  const [loadingState, loadingDispatch] = useReducer(
    LoadingReducer,
    initialState
  );

  const setLoading = (condition: boolean) => {
    condition
      ? loadingDispatch({
          type: LoadingActionType.SET_LOADING_TRUE,
          payload: true,
        })
      : loadingDispatch({
          type: LoadingActionType.SET_LOADING_FALSE,
          payload: false,
        });
  };

  return (
    <Context.Provider value={{ ...loadingState, setLoading }}>
      {children}
    </Context.Provider>
  );
};

export default LoadingProvider;
