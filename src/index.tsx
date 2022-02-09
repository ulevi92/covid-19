import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreProvider from "./context/store/StoreProvider";
import ThemeProviderCtx from "./context/theme/ThemeProviderCtx";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProviderCtx>
        <App />
      </ThemeProviderCtx>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
