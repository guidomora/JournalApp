import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material";
import React from "react";

// La cuenta en sx significa que al 100% del width le reste drawerWidth (240px)

// display: { sm: "none" } que en las pantallas que cumplan con sm (600px o mas) no se muestra el boton

const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">JournalApp</Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
