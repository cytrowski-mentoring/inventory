import "./App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type Unit = "pack" | "kg" | "g" | "unit" | "jar" | "bottle" | "l" | "ml";
const units = [
  { value: "pack" },
  { value: "kg" },
  { value: "g" },
  { value: "unit" },
  { value: "jar" },
  { value: "bottle" },
];

type ComplexUnit =
  | { id: "pack 1 kg"; type: "mass"; value: 1000 }
  | { id: "jar 1 l"; type: "volume"; value: 1000 }
  | { id: "bottle 0.5 l"; type: "volume"; value: 500 }
  | { id: "pack 4 units"; type: "quantity"; value: 4 }
  | { id: "unit"; type: "quantity"; value: 1 };

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
  return (
    <>
      <FormControl margin="normal">
        <TextField id="1" label="Name of the product" variant="outlined" />
        <TextField id="2" label="Current stock" variant="outlined" />
        <FormControl>
          <InputLabel id="4">Unit of stock</InputLabel>
          <Select id="3" label="Unit of stock" variant="outlined">
            {units.map((option) => (
              <MenuItem value={option.value}>{option.value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained">Add to inventory</Button>
      </FormControl>
      <List>
        {currentInventory.map((item) => {
          return (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    secondary={`${item.quantity} ${item.unit ?? ""}`}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </>
  );
}

export default App;
