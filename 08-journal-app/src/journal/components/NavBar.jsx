/* eslint-disable react/prop-types */
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
