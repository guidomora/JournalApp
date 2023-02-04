import { TurnedInNot } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {useSelector} from "react-redux"
import SideBarItem from "./SideBarItem";

// En material UI se le conoce como drawer
// El Divider literalmente es una linea que divide

const SideBar = ({ drawerWidth = 240 }) => {

  const {displayName} = useSelector(state => state.auth)
  const {notes} = useSelector(state => state.journal)

  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // puede ser temporary si le ponemos un condicional o algo para que no se vea siempre
        open // esto seria lo mismo que este en true
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note}/>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
