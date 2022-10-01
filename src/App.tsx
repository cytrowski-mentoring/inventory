import "./App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

type Unit = "pack" | "kg" | "unit" | "jar" | "bottle";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit: Unit;
}

const currentInventory: InventoryItem[] = [
  { id: 1, name: "Chips", quantity: 2, unit: "pack" },
  { id: 2, name: "Bananas", quantity: 1, unit: "kg" },
  { id: 3, name: "Garlic", quantity: 1, unit: "unit" },
  { id: 4, name: "Jam", quantity: 1, unit: "jar" },
  { id: 5, name: "Olive oil", quantity: 1, unit: "bottle" },
];

// optional: additional unit i.e. bottle - alcohol 1000 ml/ soy sayce 200 ml
// pack - 10 "units of" eggs, 300g of chips, 200ml yogurt
// kg - 3 avocados
// problem - updating inventory by all units applied
// problem - different quantity for the same products in different packaging

function App() {
  return (
    <>
      <List>
        {currentInventory.map((item) => {
          return (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    secondary={`${item.quantity}` + " " + `${item.unit}`}
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
