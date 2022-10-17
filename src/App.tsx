import "./App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, NavLink } from "react-router-dom";

//type Unit = "pack" | "kg" | "g" | "unit" | "jar" | "bottle" | "l" | "ml" | "can";

// optional: additional unit i.e. bottle - alcohol 1000 ml/ soy sayce 200 ml
// pack - 10 "units of" eggs, 300g of chips, 200ml yogurt
// kg - 3 avocados
// problem - updating inventory by all units applied
// problem - different quantity for the same products in different packaging

//filters - by category of products, by shop?
//some filters have to be optional and some have to be multiple choice

const menuitems = [
  { label: "Dashboard", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Shopping list", href: "/shopping-list" },
  { label: "Categories", href: "/categories" },
  { label: "Statistics", href: "/statistics" },
  { label: "Stores", href: "/stores" },
  { label: "My Account", href: "/my-account" },
  { label: "Units", href: "/units" },
];

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
              {menuitems.map((menuitem) => (
                <ListItem key={menuitem.href} disablePadding>
                  <ListItemButton component={NavLink} to={menuitem.href}>
                    <ListItemText primary={menuitem.label} />
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
