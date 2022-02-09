import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingProvider from "./context/loading/LoadingProvider";
import StoreProvider from "./context/store/StoreProvider";
import ThemeProviderCtx from "./context/theme/ThemeProviderCtx";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <LoadingProvider>
        <ThemeProviderCtx>
          <App />
        </ThemeProviderCtx>
      </LoadingProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
