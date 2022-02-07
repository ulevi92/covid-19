import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingProvider from "./context/loading/LoadingProvider";
import ThemeProviderCtx from "./context/theme/ThemeProviderCtx";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <ThemeProviderCtx>
        <App />
      </ThemeProviderCtx>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
