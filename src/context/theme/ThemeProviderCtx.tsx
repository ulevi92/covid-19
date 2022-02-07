import { createContext, FC, useContext, useReducer } from "react";
import {
  ThemeActionType,
  themeReducer,
} from "./ThemeReducer";

export interface ThemeProviderState {
  lightMode: boolean;
}

interface ContextProps extends ThemeProviderState {
  setLightMode: (condition: boolean) => void;
}

const Context = createContext<ContextProps | null>(null);

export const useThemeProviderCtx = () => {
  const ctx = useContext(Context);
  if (!ctx)
    throw new Error("useThemeProvider must be used inside ThemeProvider");

  return ctx;
};

const ThemeProviderCtx: FC = ({ children }) => {
  const initialState: ThemeProviderState = {
    lightMode: true,
  };

  const [themeState, themeDispatch] = useReducer(themeReducer, initialState);

  const setLightMode = (condition: boolean) => {
    condition
      ? themeDispatch({ type: ThemeActionType.SET_DARK, payload: false })
      : themeDispatch({ type: ThemeActionType.SET_LIGHT, payload: true });
  };

  return (
    <Context.Provider value={{ ...themeState, setLightMode }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProviderCtx;
