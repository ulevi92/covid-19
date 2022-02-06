import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import About from "./pages/About";
import Country from "./pages/Country";
import Home from "./pages/Home";
import { lightTheme } from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country' element={<Country />} />
            <Route path='/about' element={<About />} />

            {/*  */}

            <Route path='/404' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
