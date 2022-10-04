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

//type Unit = "pack" | "kg" | "g" | "unit" | "jar" | "bottle" | "l" | "ml" | "can";
const units = [
  { id: "pack 1 kg", type: "mass", value: 1000 },
  { id: "jar 1 l", type: "volume", value: 1000 },
  { id: "bottle 0.5 l", type: "volume", value: 500 },
  { id: "pack 4 units", type: "quantity", value: 4 },
  { id: "unit", type: "quantity", value: 1 },
] as const;

type ComplexUnit = typeof units[number];

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit?: ComplexUnit["id"];
}

const currentInventory: InventoryItem[] = [
  { id: 1, name: "Chips", quantity: 2 },
  { id: 2, name: "Bananas", quantity: 1 },
  { id: 3, name: "Garlic", quantity: 1, unit: "unit" },
  { id: 4, name: "Jam", quantity: 1, unit: "jar 1 l" },
  { id: 5, name: "Olive oil", quantity: 1, unit: "bottle 0.5 l" },
  { id: 6, name: "Blackberries", quantity: 250 },
];

// optional: additional unit i.e. bottle - alcohol 1000 ml/ soy sayce 200 ml
// pack - 10 "units of" eggs, 300g of chips, 200ml yogurt
// kg - 3 avocados
// problem - updating inventory by all units applied
// problem - different quantity for the same products in different packaging

//filters - by category of products, by shop?
//some filters have to be optional and some have to be multiple choice

function App() {
  const drawerWidth = 180;
  const [inventoryItems, setInventoryItems] = useState(currentInventory);
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      name: HTMLInputElement;
      quantity: HTMLInputElement;
      unit: HTMLSelectElement;
    };
    const name = target.name.value;
    const quantity = Number(target.quantity.value);
    const unit = target.unit.value as ComplexUnit["id"];
    setInventoryItems((oldState) => [
      { name, quantity, unit, id: Date.now() },
      ...oldState,
    ]);
    target.name.value = "";
    target.quantity.value = "";
    target.unit.value = "";
    //console.log(event.target.unit.value);
  };

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
          <Button variant="contained" type="submit">
            Add a product
          </Button>
          <form onSubmit={handleSubmit}>
            <FormControl margin="normal">
              <TextField
                id="1"
                label="Name of the product"
                variant="outlined"
                name="name"
              />
              <TextField
                id="2"
                label="Current stock"
                variant="outlined"
                name="quantity"
              />
              <FormControl>
                <InputLabel id="4">Unit of stock</InputLabel>
                <Select
                  id="3"
                  label="Unit of stock"
                  variant="outlined"
                  defaultValue=""
                  name="unit"
                >
                  <MenuItem value="" disabled>
                    Pick unit
                  </MenuItem>
                  {units.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant="contained" type="submit">
                Add to inventory
              </Button>
            </FormControl>
          </form>
          <List>
            {inventoryItems.map((item) => {
              return (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText
                        primary={item.name}
                        secondary={`${item.quantity} ${item.unit ?? ""}`}
                      />
                    </ListItemButton>
                    <ListItemButton>Edit</ListItemButton>
                  </ListItem>
                  <Divider />
                </Fragment>
              );
            })}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default App;
