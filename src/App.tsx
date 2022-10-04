import "./App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { FormEventHandler, Fragment, useState } from "react";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { ComplexUnit, currentInventory, units } from "./utils";

//type Unit = "pack" | "kg" | "g" | "unit" | "jar" | "bottle" | "l" | "ml" | "can";

// optional: additional unit i.e. bottle - alcohol 1000 ml/ soy sayce 200 ml
// pack - 10 "units of" eggs, 300g of chips, 200ml yogurt
// kg - 3 avocados
// problem - updating inventory by all units applied
// problem - different quantity for the same products in different packaging

//filters - by category of products, by shop?
//some filters have to be optional and some have to be multiple choice

function App() {
  const drawerWidth = 180;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Inventory
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {[
                "Dashboard",
                "Inventory",
                "Shopping list",
                "Categories",
                "Statistics",
                "Stores",
                "My Account",
                "Settings",
              ].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default App;
