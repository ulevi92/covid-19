import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layouts/Navbar";
import { useThemeProviderCtx } from "./context/theme/ThemeProviderCtx";
import NotFound from "./pages/404";
import About from "./pages/About";
import Countries from "./pages/Countries";
import Country from "./components/countries/Country";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./theme/theme";
import CountriesPage from "./components/countries/CountriesPage";
import { useStoreContext } from "./context/store/StoreProvider";
import Spinner from "./components/shared/Spinner";

function App() {
  const { lightMode } = useThemeProviderCtx();

  const { loading } = useStoreContext();

  if (loading) return <Spinner />;

  return (
    <>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <CssBaseline />
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/countries/:pageNum' element={<Countries />} />
            <Route path='/country/:countryName' element={<Country />} />

            <Route path='/about' element={<About />} />

            {/* redirect any unexists route to NotFound */}

            <Route path='/404' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={2500} />
      </ThemeProvider>
    </>
  );
}

export default App;
