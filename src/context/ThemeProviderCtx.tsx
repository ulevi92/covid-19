import { createContext, FC, useContext, useReducer } from "react";
import { themeReducer, ThemeReducerType } from "./ThemeReducer";

export interface ThemeProviderState {
  lightMode: boolean;
  currentMode: "light" | "dark";
}

interface ContextProps extends ThemeProviderState {
  themeDispatch: React.Dispatch<ThemeReducerType>;
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
    currentMode: "light",
  };

  const [themeState, themeDispatch] = useReducer(themeReducer, initialState);

  return (
    <Context.Provider value={{ ...themeState, themeDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProviderCtx;
