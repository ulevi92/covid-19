import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useThemeProviderCtx } from "../../context/ThemeProviderCtx";
import MenuIcon from "@mui/icons-material/Menu";
import { linksObject } from "./navbar.helper";

const Navbar = () => {
  const { lightMode, themeDispatch } = useThemeProviderCtx();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const renderLinks = linksObject.map(({ id, link }) => (
    <Link to={`/${link}`} key={id}>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign='center'>{link.toUpperCase()}</Typography>
      </MenuItem>
    </Link>
  ));

  const renderLinksButtons = linksObject.map(({ id, link }) => (
    <Link to={`/${link}`} key={id}>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {link.toUpperCase()}
      </Button>
    </Link>
  ));

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
