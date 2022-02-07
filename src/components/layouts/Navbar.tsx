import styled from "@emotion/styled/types/base";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useThemeProviderCtx } from "../../context/ThemeProviderCtx";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const { lightMode, themeDispatch } = useThemeProviderCtx();

  return (
    <>
      <AppBar position='sticky'>
        <Container>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Covid-19 Dashboard
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
