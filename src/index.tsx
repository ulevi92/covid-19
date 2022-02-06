import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProviderCtx from "./context/ThemeProviderCtx";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderCtx>
      <App />
    </ThemeProviderCtx>
  </React.StrictMode>,
  document.getElementById("root")
);
