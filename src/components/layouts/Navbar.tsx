import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//import mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//import mui icon
import MenuIcon from "@mui/icons-material/Menu";
//import linkObject
import { linksObject } from "./navbar.helper";

import styles from "./Navbar.module.scss";
import { ThemeActionType } from "../../context/theme/ThemeReducer";
import { useThemeProviderCtx } from "../../context/theme/ThemeProviderCtx";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { lightMode, setLightMode } = useThemeProviderCtx();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const renderLinks = linksObject.map(({ id, link }) => (
    <Link to={`/${link}`} key={id} className={styles.noneUnderLine}>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign='center' sx={{ fontWeight: 700 }}>
          {link.toUpperCase()}
        </Typography>
      </MenuItem>
    </Link>
  ));

  const renderLinksButtons = linksObject.map(({ id, link }) => (
    <Link to={`/${link}`} key={id} className={styles.noneUnderLine}>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block", fontWeight: 700 }}
      >
        {link.toUpperCase()}
      </Button>
    </Link>
  ));

  const onSwitchModeClick = () =>
    lightMode ? setLightMode(true) : setLightMode(false);

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                cursor: "pointer",
                fontFamily: "Offside",
                fontWeight: "900",
              },
            }}
            onClick={() => navigate("/")}
          >
            Covid-19 Dashboard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {renderLinks}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                cursor: "pointer",
                fontFamily: "Offside",
                fontWeight: "900",
              },
            }}
            onClick={() => navigate("/")}
          >
            Covid-19 Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {renderLinksButtons}
          </Box>

          <Box>
            <Button
              variant='contained'
              color='info'
              onClick={onSwitchModeClick}
            >
              {lightMode ? "Switch to Dark" : "Switch to light"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
