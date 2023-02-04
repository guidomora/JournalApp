import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

// El box es como un div tamb
// Este componente al ser un layout vamos a recibir un children

const drawerWidth= 240

const JournalLayout = ({ children }) => {
  return (
      <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn">
        <NavBar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
