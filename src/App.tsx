import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeProviderCtx } from "./context/ThemeProviderCtx";
import NotFound from "./pages/404";
import About from "./pages/About";
import Country from "./pages/Country";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { lightMode } = useThemeProviderCtx();

  return (
    <>
      <Router>
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country' element={<Country />} />
            <Route path='/about' element={<About />} />

            {/*  */}

            <Route path='/404' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
